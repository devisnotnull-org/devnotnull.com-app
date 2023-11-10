import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Link from "@web/components/link/link";
import { dateCaculator } from "../../../utils";
import { IAsset } from "../../../models/common";
import { Blog } from "../../../models/blog";
import RichText from "../richtext/richtext";
import { useTranslation } from "react-i18next";

type Props = {
  item: Blog;
  assets: IAsset[];
  isPreview?: boolean;
};

export const Article = ({ item, assets, isPreview }: Props): JSX.Element => {
  const [viewed, setViewed] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  if (inView === true && viewed === false) setViewed(true);

  const commentBox = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (isPreview) return;
    const commentScript = document.createElement("script");
    commentScript.async = true;
    commentScript.src = "https://utteranc.es/client.js";
    commentScript.setAttribute("repo", "devisnotnull-org/devnotnull.com-app");
    commentScript.setAttribute("issue-term", "pathname");
    commentScript.setAttribute("id", "utterances");
    commentScript.setAttribute("label", "comment");
    commentScript.setAttribute("crossorigin", "anonymous");
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
    const removeScript = () => {
      commentScript.remove();
      document.querySelectorAll(".utterances").forEach((el) => el.remove());
    };
    return () => {
      removeScript();
    };
  }, []);

  const asset = assets?.find(
    (assetItem) => assetItem.sys.id === item?.fields?.image?.[0]?.sys?.id,
  );

  const dateUpdatedCaculatorResult = dateCaculator(
    new Date(item?.sys?.updatedAt),
  );

  const dateCreatedCaculatorResult = dateCaculator(
    new Date(item?.sys?.createdAt),
  );

  const isOriginal =
    new Date(item?.sys?.updatedAt) === new Date(item?.sys?.createdAt);

  const finalDate = isOriginal ? (
    <span>
      {useTranslation().t("Published")} {dateUpdatedCaculatorResult.unit}
      <b>
        {dateUpdatedCaculatorResult.unitType} {useTranslation().t("Ago")}
      </b>
    </span>
  ) : (
    <span>
      {useTranslation().t("Updated")}{" "}
      <b>
        {dateUpdatedCaculatorResult.unit} {dateUpdatedCaculatorResult.unitType}{" "}
        {useTranslation().t("Ago")}
      </b>{" "}
      {useTranslation().t("Published")}{" "}
      <b>
        {dateCreatedCaculatorResult.unit} {dateCreatedCaculatorResult.unitType}{" "}
        {useTranslation().t("Ago")}
      </b>
    </span>
  );

  return (
    <article
      key={item?.sys?.id}
      className="animate-fade-down animate-once animate-delay-100 animate-ease-in-out animate-normal"
    >
      <h1 className="text-2xl pb-3.5 font-bold font-harman">
        <Link to={`/blog/${item.fields.slug}`}>
          {item?.fields?.title ?? ""}
        </Link>
      </h1>
      <div className="pb-3.5">{item?.fields?.summary}</div>
      <div className="pb-3.5">
        {item?.metadata?.tags.map((tag) => (
          <Link to={`/blog/tags/${tag?.sys?.id}`}>
            <span className="mt-10 relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {tag?.sys?.id}
            </span>
          </Link>
        ))}
      </div>

      <div className="text-sm text-gray-500">{finalDate}</div>

      <div className="flex justify-center items-center m-5">
        <img src={asset?.fields?.file?.url} />
      </div>

      <div ref={ref} className="mb-10">
        {item.fields.blogContent && (
          <RichText
            payload={item.fields.blogContent}
            assets={assets}
            limit={isPreview ? 5 : undefined}
          />
        )}
        {!isPreview && <div ref={commentBox} />}
        {isPreview && (
          <div className="mt-10">
            <Link
              to={`/blog/${item.fields.slug}`}
              classNames="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {useTranslation().t("ViewFullPost")}
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default Article;
