import React from 'react'

import {
  forwardRef,
  Fragment,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { searchBlog } from '@core/search/fetch'
import { SearchIcon } from './icons/icons'

type EmptyObject = Record<string, never>

const SearchInput = forwardRef<
  React.ElementRef<'input'>,
  {
    onClose: () => void
    setValue: (key: string) => void
  }
>(function SearchInput({ onClose, setValue }, inputRef) {

    return (
        <div className="group relative flex h-12">
        <SearchIcon className="pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500" />
        <input
            ref={inputRef}
            className={clsx(
            'flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden',
            )}
            onKeyDown={(event) => {
            if (
                event.key === 'Escape'
            ) {
                // In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
                // bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
                if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur()
                }

                onClose()
            } else {
                setValue(event.target.value + event.key)
            }
            }}
        />
        </div>
    )
})

function SearchDialog({
  open,
  setOpen,
  className,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  className?: string
}) {
    const [searchResults, setSearchResults] = useState<{ items: [], assets: []}>({ items: [], assets: []})
    const [inputString, setInputString] = useState<string>('')

  const formRef = useRef<React.ElementRef<'form'>>(null)
  const panelRef = useRef<React.ElementRef<'div'>>(null)
  const inputRef = useRef<React.ElementRef<typeof SearchInput>>(null);

  useEffect(() => {
    setOpen(false)
  }, [setOpen])

  useEffect(() => {
      searchBlog(inputString).then((results) => { 
        setSearchResults({ items: results.data?.payload ?? [], assets: results.data?.payload?.includes?.Asset ?? []})
     }).catch((error) => {
          console.log(error)
      })
  }, [inputString])

  useEffect(() => {
    if (open) {
      return
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, setOpen])

  const findAssets = (assetId: string, assets: []) => {
    return assets.find(assetItem => assetId === assetItem.sys.id);
  }

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        onClose={setOpen}
        className={clsx('fixed inset-0 z-50', className)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-400/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto transform-gpu overflow-hidden bg-white rounded-lg shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur sm:max-w-xl">
              <div>
                <form
                  ref={formRef}>
                  <SearchInput
                    ref={inputRef}
                    onClose={() => setOpen(false)}
                    setValue={(key) => setInputString(key)}
                  />
                  <div
                    ref={panelRef}
                    className="border-t border-zinc-200 bg-white empty:hidden"
                  >
                    <ul className="divide-y divide-zinc-200">
                        {searchResults?.items?.items?.length > 0 && searchResults?.items?.items?.map((result) => {    
                            return (
                                <li key={result.sys.id} className="px-6 py-3.5 hover:bg-zinc-100">
                                    <a href={`/blog/${result.fields.slug}`} className="block">
                                      <div className='flex flex-row'>
                                      <div className='basis-1/4'>
                                          <div><img src={findAssets(result?.fields?.image?.[0]?.sys?.id, searchResults.assets)?.fields?.file?.url}/></div>
                                        </div>
                                        <div className='basis-3/4 ml-5'>
                                          <div className="text-zinc-900 font-harman"><h1>{result.fields.title}</h1></div>
                                          <div className="text-zinc-500">{result.fields.summary}</div>
                                        </div>
                                        </div>
                                    </a>
                                </li>
                            )
                        })}
                        {searchResults?.items?.items?.length === 0 && (
                            <li className="px-6 py-3.5 hover:bg-zinc-100">
                                {inputString.length > 0 && <div className="text-zinc-900 font-harman"><h1>No results found</h1></div>}
                                <div className="text-zinc-500">Try searching for something else</div>
                            </li>
                            )
                        }
                    </ul>
                  </div>
                </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

function useSearchProps() {
  const buttonRef = useRef<React.ElementRef<'button'>>(null)
  const [open, setOpen] = useState(false)

  return {
    buttonProps: {
      ref: buttonRef,
      onClick() {
        setOpen(true)
      },
    },
    dialogProps: {
      open,
      setOpen: useCallback(
        (open: boolean) => {
            const { width = 0, height = 0 } =
            buttonRef.current?.getBoundingClientRect() ?? {}
          if (!open || (width !== 0 && height !== 0)) {
            setOpen(open)
          }
        },
        [setOpen],
      ),
    },
  }
}

export function Search() {
  const [modifierKey, setModifierKey] = useState<string>()
  const { buttonProps, dialogProps } = useSearchProps()

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ',
    )
  }, [])

  return (
    <div className="block max-w-md flex-auto">
      <button
        type="button"
        className="h-8 w-full items-center gap-2 rounded-full bg-white p-6 text-medium text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none flex"
        {...buttonProps}
      >
        <span className='inline-block'>
          <SearchIcon className="h-5 w-5 stroke-current" />
        </span>
        <span className='invisible md:visible inline-block'>Search blog</span>
        <kbd className="ml-auto text-2xs text-zinc-400 invisible md:visible inline-block">
          <kbd className="font-sans">{modifierKey}</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      <Suspense fallback={null}>
        <SearchDialog className="block" {...dialogProps} />
      </Suspense>
    </div>
  )
}

export function SearchMobile() {
  const [modifierKey, setModifierKey] = useState<string>()
  const { buttonProps, dialogProps } = useSearchProps()

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ',
    )
  }, [])

  return (
    <div className="block max-w-md flex-auto">
      <button
        type="button"
        className="h-10 text-medium text-zinc-500 ui-not-focus-visible:outline-none flex"
        {...buttonProps}
      >
          <SearchIcon className="h-10 pl-2 pt-2 stroke-current" />
      </button>
      <Suspense fallback={null}>
        <SearchDialog className="block" {...dialogProps} />
      </Suspense>
    </div>
  )
}