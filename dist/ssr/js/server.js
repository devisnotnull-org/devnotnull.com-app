/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "c9ecfefbc2b8bebc5d02";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = this["webpackJsonp"] = this["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact/contact.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-2-1!./node_modules/postcss-loader/src??postcss!./src/components/contact/contact.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.contact_ContactItem__3u6u5 {\n    width: 100%;\n    display: flex;\n    border: 1px solid #e6e6e6;\n    border-bottom: none\n}\n\n.contact_ContactItem__3u6u5:last-child {\n    border: 1px solid #e6e6e6;\n}\n\n.contact_ContactItem--Icon__2qe37 {\n    padding: 1rem;\n    border-right: 1px solid #aaa;\n    opacity: 0.3;\n    width: 2rem;\n}\n\n.contact_ContactItem__3u6u5 .contact_fa__1S-1T {\n    font-size: 2rem;\n}\n\n.contact_ContactItem--Title__1g9rh{\n    flex: 8 1;\n    padding: 1rem;\n    font-size: 1.5rem;\n    font-weight: 700;\n    opacity: 0.9;\n}\n\n.contact_ContactItem--Title--Only__3HKnr{\n    margin-top: 10px;\n}\n\n.contact_ContactItem--Description__2_1CF{\n    width: 80%;\n    width: calc(100% - 55px);\n    font-size: 1.2rem;\n    opacity: 0.7;\n}", ""]);

// exports
exports.locals = {
	"ContactItem": "contact_ContactItem__3u6u5",
	"ContactItem--Icon": "contact_ContactItem--Icon__2qe37",
	"fa": "contact_fa__1S-1T",
	"ContactItem--Title": "contact_ContactItem--Title__1g9rh",
	"ContactItem--Title--Only": "contact_ContactItem--Title--Only__3HKnr",
	"ContactItem--Description": "contact_ContactItem--Description__2_1CF"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/education/education.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-2-1!./node_modules/postcss-loader/src??postcss!./src/components/education/education.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!../../style/common.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/style/common.css"), "");

// module
exports.push([module.i, ":root{\n    --section-top-margin: 2rem;\n}\n\n.education_Education__3JcPK {\n    margin-top: 2rem;\n    margin-top: var(--section-top-margin);\n    position: relative;\n    padding: 1em 0;\n    display: flex;\n}\n\n.education_Education__3JcPK:before {\n    width: 0.5rem;\n    height: 100%;\n    position: absolute;\n    left: 2.45rem;\n    top: 0;\n    content: ' ';\n    display: block;\n    background: var(--base-colour);\n    background: -webkit-linear-gradient(top, #ffffff 60px, var(--base-colour) 50%, var(--base-colour) 89%, #ffffff 100%);\n    background: linear-gradient(to bottom, #ffffff 60px, var(--base-colour) 50%, var(--base-colour) 89%, #ffffff 100%);\n}\n\n.education_Education--Year__1zSzf {\n    background: #fff;\n    padding: 1rem;\n    font-size: 1.5em;\n    font-weight: 700;\n    flex: 1 1;\n}\n\n.education_Education--Description__2ag3z {\n    width: 80%;\n    display: inline-block;\n    background: #eee;\n    margin-bottom: 1rem;\n    position: relative;\n    padding: 1rem 1rem 0 1rem;\n    border-bottom: 1px solid #ddd;\n    flex: 9 1;\n}\n\n.education_Education--Description__2ag3z:after {\n    content: '';\n    position: absolute;\n    top: 1.5rem;\n    right: 0;\n    left: -1.5rem;\n    height: 0;\n    width: 0;\n    border: solid transparent;\n    border-right-color: #eee;\n    border-width: 1rem;\n    pointer-events: none;\n}\n\n.education_Education--Description__2ag3z h3 {\n    font-size: 1.6em;\n    margin: 0;\n    padding: 0;\n    font-weight: 700;\n}\n\n.education_Education--Description__2ag3z p {\n    font-size: 1.3em;\n    margin-top: 0.5rem;\n    padding: 0;\n}\n\n.education_Education__3JcPK:before {\n    width: 0.5rem;\n    height: 100%;\n    position: absolute;\n    left: 2.45rem;\n    top: 0;\n    content: ' ';\n    display: block;\n    background: #ec7263;\n    background: -webkit-linear-gradient(top, #ffffff 0%, var(--base-colour) 7%, var(--base-colour)#ec7263 89%, #ffffff 100%);\n    background: linear-gradient(to bottom, #ffffff 0%, var(--base-colour) 7%, var(--base-colour)#ec7263 89%, #ffffff 100%);\n}\n\n.education_Education--Description__2ag3z:after {\n    content: '';\n    position: absolute;\n    top: 1.5rem;\n    right: 0;\n    left: -1.5rem;\n    height: 0;\n    width: 0;\n    border: solid transparent;\n    border-right-color: #eee;\n    border-width: 1rem;\n    pointer-events: none;\n}", ""]);

// exports
exports.locals = {
	"Education": "education_Education__3JcPK",
	"Education--Year": "education_Education--Year__1zSzf",
	"Education--Description": "education_Education--Description__2ag3z"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/experiance/experiance.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-2-1!./node_modules/postcss-loader/src??postcss!./src/components/experiance/experiance.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!../../style/common.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/style/common.css"), "");

// module
exports.push([module.i, ":root{\n    --section-top-margin: 2rem;\n}\n\n.experiance_Experiance__2dSLI {\n    position: relative;\n    padding: 1em 0;\n    display: flex;  \n    flex-direction: row;\n    min-height: 14rem;\n}\n\n.experiance_Experiance__2dSLI:before {\n    width: 0.5rem;\n    height: 40%;\n    top: 70px;\n    position: absolute;\n    left: 2.45rem;\n    content: ' ';\n    display: block;\n    background: var(--base-colour);\n    background: -webkit-linear-gradient(top, #ffffff 0px, var(--base-colour) 0%, var(--base-colour) 0%, #ffffff 100%);\n    background: linear-gradient(to bottom, #ffffff 0px, var(--base-colour) 0%, var(--base-colour) 0%, #ffffff 100%);\n}\n\n.experiance_Experiance--Year__3CgN5 {\n    background: #fff;\n    padding: 1rem;\n    font-size: 1.5em;\n    font-weight: 700;\n    order: 1;\n    flex: 1 1;\n}\n\n.experiance_Experiance--Description__31aC6{\n    background: #eee;\n    margin-bottom: 1rem;\n    position: relative;\n    padding: 1rem 1rem 0 1rem;\n    border-bottom: 1px solid #ddd;\n    order: 2;\n    flex: 9 1;\n}\n\n.experiance_Experiance--Description__31aC6:after {\n    content: '';\n    position: absolute;\n    top: 1.5rem;\n    right: 0;\n    left: -1.5rem;\n    height: 0;\n    width: 0;\n    border: solid transparent;\n    border-right-color: #eee;\n    border-width: 1rem;\n    pointer-events: none;\n}\n\n.experiance_Experiance--Description__31aC6 h3 {\n    font-size: 1.6em;\n    margin: 0;\n    padding: 0;\n    font-weight: 700;\n}\n\n.experiance_Experiance--Description__31aC6 p {\n    font-size: 1.3em;\n    margin-top: 0.5rem;\n    padding: 0;\n}\n\n@media (max-width: 850px) {\n\n    .experiance_Experiance__2dSLI {  \n        flex-direction: column;\n    }\n\n    .experiance_Experiance--Year__3CgN5 {\n        flex: 1 1;\n    }\n    \n    .experiance_Experiance--Description__31aC6{\n        flex: 9 1;\n    }\n\n    \n}", ""]);

// exports
exports.locals = {
	"Experiance": "experiance_Experiance__2dSLI",
	"Experiance--Year": "experiance_Experiance--Year__3CgN5",
	"Experiance--Description": "experiance_Experiance--Description__31aC6"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/folio/folio.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-2-1!./node_modules/postcss-loader/src??postcss!./src/components/folio/folio.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folio_Folio__19Cut {\n    display: flex;  \n    flex-direction: row;\n    flex-wrap: wrap;\n    position: relative;\n    margin-bottom: 1rem;\n}\n\n.folio_Folio--Image__nDQa1 img {\n    width: 100%;\n    height: 100%;\n}\n\n.folio_Folio--Overlay__2rM7B {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.folio_Folio--Overlay__2rM7B:hover {\n    opacity: 0.7;\n    background-color: #000000;\n    -webkit-transition: background-color 200ms linear;\n    transition: background-color 200ms linear;\n}\n\n.folio_Folio--Overlay--Header__1Lpkj {\n   text-align: center;\n   padding: 1rem;\n   background: #000000;\n   color: #ffffff;\n   font-size: 1.5rem;\n   font-weight: bold;\n}\n\n@media (max-width: 850px) {\n\n    .folio_Folio__19Cut {\n        flex-direction: column;\n    }\n\n    .folio_Folio--Image__nDQa1 {\n        width: 100%;\n    }\n\n}", ""]);

// exports
exports.locals = {
	"Folio": "folio_Folio__19Cut",
	"Folio--Image": "folio_Folio--Image__nDQa1",
	"Folio--Overlay": "folio_Folio--Overlay__2rM7B",
	"Folio--Overlay--Header": "folio_Folio--Overlay--Header__1Lpkj"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile/profile.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-2-1!./node_modules/postcss-loader/src??postcss!./src/components/profile/profile.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!../../style/common.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/style/common.css"), "");

// module
exports.push([module.i, ":root {\n    --header-top: 8rem;\n    --header-inverse-top: -7.5rem;\n}\n\n.profile_Header__1sKgV {\n    margin-top: 90px;\n    text-align: center;\n    margin-right: 1.5rem;\n    margin-left: 1.5rem;\n    padding-bottom: 2rem;\n}\n\n.profile_Header--Photo__1i1cB {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n    overflow: hidden;\n    padding: 5px;\n    background: #ededed;\n    display: inline-block;\n    margin-top: -80px;\n}\n\n.profile_Header--Photo__1i1cB img {\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n}\n\n.profile_Text--Header__3OlLk h1 {\n    margin: 0;\n    padding: 0;\n    font-size: 2.4rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: -1px;\n}\n\n.profile_Text-header__3sLVw h1::first-line {\n    font-size: 1.5rem;\n    letter-spacing: -4px;\n    font-weight: 800;\n    line-height: 1.5rem;\n}\n\n.profile_Header--Text__1NLro h1 span {\n    color: #F0563D;\n}\n\n.profile_Header--Text__1NLro h1 sup {\n    opacity: 0.5;\n}\n\n.profile_Header--Text__1NLro:after {\n    width: 100%;\n    height: 0.3rem;\n    background: #ddd;\n    opacity: 0.5;\n    margin-top: 1.5rem;\n    content: '';\n    display: block;\n}\n\n.profile_Description__1JAT0 {\n  font-size: 1.6rem;\n}", ""]);

// exports
exports.locals = {
	"Header": "profile_Header__1sKgV",
	"Header--Photo": "profile_Header--Photo__1i1cB",
	"Text--Header": "profile_Text--Header__3OlLk",
	"Text-header": "profile_Text-header__3sLVw",
	"Header--Text": "profile_Header--Text__1NLro",
	"Description": "profile_Description__1JAT0"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/skillz/skillz.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-2-1!./node_modules/postcss-loader/src??postcss!./src/components/skillz/skillz.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skillz_Item--Skills__fJRSd {\n    white-space: wrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 600;\n    margin-bottom:10px;\n}\n  \n.skillz_Skill__1EeXi {\n    background: #F0563D;\n    color: #fff;\n    padding: 0.5rem 1rem;\n    margin-bottom: 0.5rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.2em;\n    font-weight: 600;\n}\n  \n.skillz_Skill-Items__1n17r {\n    background: #ffffff;\n    color: #fff;\n    padding: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: 600;\n    font-size: 1.4em;\n    border:1px solid #e6e6e6;\n    border-top:none;\n}\n\n.skillz_Skill--Badge__3qKXz {\n    display: inline-block;\n    background: #e6e6e6;\n    padding: 0.8rem;\n    font-size: 1.2rem;\n    margin-right: 0.5rem;\n    margin-bottom: 0.5rem;\n}", ""]);

// exports
exports.locals = {
	"Item--Skills": "skillz_Item--Skills__fJRSd",
	"Skill": "skillz_Skill__1EeXi",
	"Skill-Items": "skillz_Skill-Items__1n17r",
	"Skill--Badge": "skillz_Skill--Badge__3qKXz"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/home/home.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-2-1!./node_modules/postcss-loader/src??postcss!./src/containers/home/home.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home_Image__3KxXb {\n    width: 33%;\n}\n\n.home_Content__1zora {\n    display: flex;  \n    flex-direction: row;\n}\n\n.home_Description__2ltYK {\n    order: 1;\n    flex: 2 1;\n    padding: 0 1rem 1rem 1.5rem;\n}\n\n.home_Breakdown__3nyRe {\n    order: 2;\n    flex: 1 1;\n    padding: 0 1rem 0 1rem;\n}\n  \n@media (max-width: 1190px) {\n    .home_Header--Container__1QJoz {\n        margin-left: 2rem;\n        margin-right: 2rem;\n    }\n}\n\n@media (max-width: 1024px) {\n\n    .home_Header--Container__1QJoz {\n        margin-top: 6rem;\n        margin-left: 2rem;\n        margin-right: 2rem;\n    }\n\n    .home_Photo__2lgbA {\n        width: 10rem;\n        height: 10rem;\n        margin-top: -5rem;\n    }\n\n    .home_Photo__2lgbA img {\n        width: 10rem;\n        height: 10rem;\n    }\n\n    .home_Image__3KxXb {\n        width: 50%;\n    }\n\n    .home_Description__2ltYK {\n        flex: 3 1;\n    }\n    \n    .home_Breakdown__3nyRe {\n        flex: 2 1;\n    }\n\n}\n\n@media (max-width: 850px) {\n\n    .home_Content__1zora {  \n        flex-direction: column;\n    }\n\n    .home_Image__3KxXb {\n        width: 100%;\n    }\n\n}", ""]);

// exports
exports.locals = {
	"Image": "home_Image__3KxXb",
	"Content": "home_Content__1zora",
	"Description": "home_Description__2ltYK",
	"Breakdown": "home_Breakdown__3nyRe",
	"Header--Container": "home_Header--Container__1QJoz",
	"Photo": "home_Photo__2lgbA"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/style/common.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-2-1!./node_modules/postcss-loader/src??postcss!./src/style/common.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900);", ""]);

// module
exports.push([module.i, "@charset \"utf-8\";\n@-webkit-viewport   { width: device-width; }\n@-moz-viewport      { width: device-width; }\n@-ms-viewport       { width: device-width; }\n@viewport           { width: device-width; }\n\n:root {\n    --base-font-famiy: 'Roboto', sans-serif;\n    --base-font-weight: 400;\n    --base-background-colour: #ededed;\n    --base-font-size: 10px;\n\n    --default-font-size: 1.4rem;\n    --default-line-heigh: 2rem;\n    \n    --base-pad: 1rem;\n \n    --header-1: 2rem;\n    --header-2: 1.7rem;\n    --header-3: 1.5rem;\n    --header-4: 1.3rem;\n\n    --font-colour: #363636;\n    --base-colour: #ec7263;\n\n    --tablet-breakpoint: 1024px;\n    --mobile-breakpoint: 800px;\n\n    --max-size: 110rem;\n}\n\nbody {\n    margin: 0 auto;\n    padding: 0;\n    max-width: 110rem;\n    max-width: var(--max-size);\n\n    font-weight: 100;\n}\n\nhtml {\n    font-size: 10px;\n    font-size: var(--base-font-size);\n    color: #363636;\n    color: var(--font-colour);\n    font-weight: 400;\n    font-weight: var(--base-font-weight);\n    font-size: 10px;\n    font-size: var(--base-font-size);\n    font-family: 'Roboto', sans-serif;\n    font-family: var(--base-font-famiy);\n    background-color: #ededed;\n    background-color: var(--base-background-colour);\n\n    font-weight: 100;\n}\n\n.common_Container--Large__3ozuc {\n    max-width: 115rrem;\n}\n\n.common_Container--Standard__44CGl {\n    max-width: 100rrem;\n}\n\n.common_Container--Small__1lJcO {\n    max-width: 90rrem;\n}\n\n.common_Align--Center__2HemM {\n    margin: 0 auto;\n}\n\n.common_Container__3hY0P {\n    background: #ffffff;\n    margin: 0 auto;\n}\n\n.common_Block__3jkX6 {\n    border-bottom: 2px solid #ededed;\n    border-bottom: 2px solid var(--base-background-colour);\n    margin-bottom: 2rem;\n}\n\n.common_Block__3jkX6:after {\n    width: 100%;\n    height: 0.3rrem;\n    background: #ddd;\n    opacity: 0.5;\n    margin-top: 1.5rrem;\n    content: '';\n    display: block;\n}\n\n.common_Clearfix__1M1t8 {\n    clear: both;\n}\n\n/** **/\n\nh1 {\n    font-size: 2rem;\n    font-size: var(--header-1);\n}\n\nh2 {\n    color: #EC7263;\n    font-size: 1.7rem;\n    font-size: var(--header-2);\n    font-weight: 700;\n    text-transform: uppercase;\n}\n\nh2:before{\n    content: '//';\n    margin-right: 5px;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-size: var(--header-3);\n}\n\nh4 {\n    font-size: 1.3rem;\n    font-size: var(--header-4);\n}\n\n/** **/\n\na {\n    text-decoration: none;\n}\n\np {\n    font-size: 1.4rem;\n    line-height: 2rem;\n    line-height: var(--default-line-heigh);\n}\n", ""]);

// exports
exports.locals = {
	"Container--Large": "common_Container--Large__3ozuc",
	"Container--Standard": "common_Container--Standard__44CGl",
	"Container--Small": "common_Container--Small__1lJcO",
	"Align--Center": "common_Align--Center__2HemM",
	"Container": "common_Container__3hY0P common_Container--Large__3ozuc",
	"Block": "common_Block__3jkX6",
	"Clearfix": "common_Clearfix__1M1t8"
};

/***/ }),

/***/ "./node_modules/express/lib sync recursive":
/*!***************************************!*\
  !*** ./node_modules/express/lib sync ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/express/lib sync recursive";

/***/ }),

/***/ "./src/common/data.ts":
/*!****************************!*\
  !*** ./src/common/data.ts ***!
  \****************************/
/*! exports provided: contactDetails, educationPayload, experiancePayload, folioPayload, profilePayload, aboutPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactDetails", function() { return contactDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "educationPayload", function() { return educationPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experiancePayload", function() { return experiancePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "folioPayload", function() { return folioPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilePayload", function() { return profilePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutPayload", function() { return aboutPayload; });
var contactDetails = [{
  icon: 'http://oflisback.github.io/react-favicon/public/img/github.ico',
  isLink: false,
  text: 'hi@fandanzle.co.uk'
}, {
  icon: 'http://oflisback.github.io/react-favicon/public/img/github.ico',
  link: 'https://github.com/stump201',
  isLink: true,
  text: 'Github'
}, {
  icon: 'http://oflisback.github.io/react-favicon/public/img/github.ico',
  isLink: true,
  link: 'https://github.com/stump201',
  text: 'Docker Hub'
}];
var educationPayload = [{
  year: '2007 - 2010',
  institute: 'Brighton University',
  subject: 'FDSC Software engineering & networked system’s',
  description: ['-']
}, {
  year: '2000 - 2007',
  institute: 'The Howard Secondary',
  subject: "GCSE's & A-levels",
  description: ['3 A-Levels', '17 A-C GCSE']
}];
var experiancePayload = [{
  year: '2019 - Present',
  company: 'Photobox',
  title: 'Engineering Manager',
  description: ['Engineering Manager for the shopping experience team']
}, {
  year: '2017 - 2019',
  company: 'Kingfisher Digital',
  title: 'Lead developer / Full Stack Developer',
  description: ['Over my two year tenure I was 1 of 5 lead developer’s within Kingfisher Digital’s  digital Hub, managing up to 50 developer’s across a shared hierarchy.', 'The projects were varied; my primary focus was expanding the React/Typescript & Express/Typescript oriented stack’s we had deployed across our various front and backend estates. The most interesting project was when my team was tasked with implementing Augmented reality using ARKIT within the core B&Q IOS app.', 'I have also been involved in all levels of conversation across the digital platform; Solution design, Systems architecture, Staffing, Tooling, Vendor sign offs & System operation’s.']
}, {
  year: '2013 - 2017',
  company: 'SecureData Europe',
  title: 'Full Stack Developer',
  description: ['This was a broad role, Initially the team was small with only three members; but over the course of 4 years it expanded to seven developers. My team was focused on software to secure customer’s estates along side internal system. Unofficially I undertook a hybrid development & Devops role.', 'For the first year in the role I was the lead for our entire technology stack and allocation of team projects before a dedicated development manage was brought it to assist with the team’s continued expansion.']
}, {
  year: '2012 - 2013',
  company: 'Gaming Media Group',
  title: 'Web developer ',
  description: ['A PHP and JavaScript oriented role, I developed numerous systems and vendor integration’s.']
}];
var folioPayload = [{
  image: 'http://media.fandanzle.co.uk/diy.png',
  title: 'Kingfisher digital'
}, {
  image: 'http://media.fandanzle.co.uk/secdata.png',
  title: 'SecureData'
}];
var profilePayload = {
  image: 'media.fandanzle.co.uk/avatar.png',
  title: 'My name is Alex and im a developer',
  subTitle: 'With a passion for web development, security, networking and microservices.'
};
var aboutPayload = ['From an early age I was always interested in computing, with age this interest has evolved into a genuine passion. Building software/stuff that solves a genuine problem is the main criteria for any project I undertake.', 'I would describe myself as keen, open to ideas and hungry for knowledge; When I’m not at work trying to build/fix something you will probably find me reading up on how to build better software; That or developing upon personal projects. I have been very lucky with all of my positions to date; I have been exposed to every level of application development & delivery. I feel this has given me what I would consider to be an advantage over most. Luckily I realised early on in my carer that programming is only one segment of a project’s pipeline, Good communication and co-ordination can elevate a good project into greatness.'];

/***/ }),

/***/ "./src/common/reducer/blog.ts":
/*!************************************!*\
  !*** ./src/common/reducer/blog.ts ***!
  \************************************/
/*! exports provided: blog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blog", function() { return blog; });
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _types_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/blog */ "./src/common/types/blog.ts");


var initialState = {
  data: [],
  errors: undefined,
  loading: false
};
var blog = function blog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types_blog__WEBPACK_IMPORTED_MODULE_1__["BlogActionTypes"].FETCH_REQUEST:
      {
        return Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          loading: true
        });
      }

    case _types_blog__WEBPACK_IMPORTED_MODULE_1__["BlogActionTypes"].FETCH_SUCCESS:
      {
        return Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          loading: false,
          data: action.payload
        });
      }

    case _types_blog__WEBPACK_IMPORTED_MODULE_1__["BlogActionTypes"].FETCH_ERROR:
      {
        return Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          loading: false,
          errors: action.payload
        });
      }

    default:
      {
        return state;
      }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (blog);

/***/ }),

/***/ "./src/common/reducer/index.ts":
/*!*************************************!*\
  !*** ./src/common/reducer/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog */ "./src/common/reducer/blog.ts");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  blogReducer: _blog__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/common/types/blog.ts":
/*!**********************************!*\
  !*** ./src/common/types/blog.ts ***!
  \**********************************/
/*! exports provided: BlogActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogActionTypes", function() { return BlogActionTypes; });
var BlogActionTypes;

(function (BlogActionTypes) {
  BlogActionTypes["FETCH_REQUEST"] = "@blog/FETCH_REQUEST";
  BlogActionTypes["FETCH_SUCCESS"] = "@blog/FETCH_SUCCESS";
  BlogActionTypes["FETCH_ERROR"] = "@blog/FETCH_ERROR";
  BlogActionTypes["SELECTED"] = "@blog/SELECTED";
})(BlogActionTypes || (BlogActionTypes = {}));

/***/ }),

/***/ "./src/components/about/about.tsx":
/*!****************************************!*\
  !*** ./src/components/about/about.tsx ***!
  \****************************************/
/*! exports provided: About, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/data */ "./src/common/data.ts");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_3__);




var About = function About() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_common_css__WEBPACK_IMPORTED_MODULE_3__["Block"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "About me"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, _common_data__WEBPACK_IMPORTED_MODULE_2__["aboutPayload"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, item);
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/contact/contact.css":
/*!********************************************!*\
  !*** ./src/components/contact/contact.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./contact.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact/contact.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./contact.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact/contact.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./contact.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/contact/contact.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/contact/contact.tsx":
/*!********************************************!*\
  !*** ./src/components/contact/contact.tsx ***!
  \********************************************/
/*! exports provided: Contact, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.css */ "./src/components/contact/contact.css");
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/data */ "./src/common/data.ts");



 // Replace with network call and saga


var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_common_css__WEBPACK_IMPORTED_MODULE_2__["Block"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Contact"), _common_data__WEBPACK_IMPORTED_MODULE_4__["contactDetails"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_contact_css__WEBPACK_IMPORTED_MODULE_3__["ContactItem"])
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_contact_css__WEBPACK_IMPORTED_MODULE_3__["ContactItem--Title"])
    }, item.isLink && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: item.link
    }, item.text), !item.isLink && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, item.text)));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/education/education.css":
/*!************************************************!*\
  !*** ./src/components/education/education.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./education.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/education/education.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./education.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/education/education.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./education.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/education/education.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/education/education.tsx":
/*!************************************************!*\
  !*** ./src/components/education/education.tsx ***!
  \************************************************/
/*! exports provided: Education, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Education", function() { return Education; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _education_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education.css */ "./src/components/education/education.css");
/* harmony import */ var _education_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_education_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/data */ "./src/common/data.ts");





var Education = function Education() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_common_css__WEBPACK_IMPORTED_MODULE_2__["Block"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Education"), _common_data__WEBPACK_IMPORTED_MODULE_4__["educationPayload"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _education_css__WEBPACK_IMPORTED_MODULE_3__["Education"]
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _education_css__WEBPACK_IMPORTED_MODULE_3__["Education--Year"]
    }, item.year), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _education_css__WEBPACK_IMPORTED_MODULE_3__["Education--Description"]
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, item.institute), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, item.subject), item.description.map(function (descriptiveItem) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, descriptiveItem);
    })));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./src/components/experiance/experiance.css":
/*!**************************************************!*\
  !*** ./src/components/experiance/experiance.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./experiance.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/experiance/experiance.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./experiance.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/experiance/experiance.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./experiance.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/experiance/experiance.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/experiance/experiance.tsx":
/*!**************************************************!*\
  !*** ./src/components/experiance/experiance.tsx ***!
  \**************************************************/
/*! exports provided: Experiance, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiance", function() { return Experiance; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _experiance_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experiance.css */ "./src/components/experiance/experiance.css");
/* harmony import */ var _experiance_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_experiance_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/data */ "./src/common/data.ts");




 //

var Experiance = function Experiance() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_common_css__WEBPACK_IMPORTED_MODULE_2__["Block"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "EXPERIENCE"), _common_data__WEBPACK_IMPORTED_MODULE_4__["experiancePayload"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
      className: _experiance_css__WEBPACK_IMPORTED_MODULE_3__["Experiance"]
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("aside", {
      className: _experiance_css__WEBPACK_IMPORTED_MODULE_3__["Experiance--Year"]
    }, item.year), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _experiance_css__WEBPACK_IMPORTED_MODULE_3__["Experiance--Description"]
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, item.company), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", null, item.title), item.description.map(function (descriptiveItem) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, descriptiveItem);
    })));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Experiance);

/***/ }),

/***/ "./src/components/folio/folio.css":
/*!****************************************!*\
  !*** ./src/components/folio/folio.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./folio.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/folio/folio.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./folio.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/folio/folio.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./folio.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/folio/folio.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/folio/folio.tsx":
/*!****************************************!*\
  !*** ./src/components/folio/folio.tsx ***!
  \****************************************/
/*! exports provided: Folio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folio", function() { return Folio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _folio_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folio.css */ "./src/components/folio/folio.css");
/* harmony import */ var _folio_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_folio_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/data */ "./src/common/data.ts");





var Folio = function Folio() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_common_css__WEBPACK_IMPORTED_MODULE_3__["Block"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Portfolio"), _common_data__WEBPACK_IMPORTED_MODULE_4__["folioPayload"].map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_folio_css__WEBPACK_IMPORTED_MODULE_2__["Folio"])
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_folio_css__WEBPACK_IMPORTED_MODULE_2__["Folio--Image"])
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_folio_css__WEBPACK_IMPORTED_MODULE_2__["Folio--Overlay"])
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_folio_css__WEBPACK_IMPORTED_MODULE_2__["Folio--Overlay--Header"])
    }, "// ", item.title)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      src: item.image
    })));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Folio);

/***/ }),

/***/ "./src/components/profile/profile.css":
/*!********************************************!*\
  !*** ./src/components/profile/profile.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./profile.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile/profile.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./profile.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile/profile.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./profile.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/profile/profile.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/profile/profile.tsx":
/*!********************************************!*\
  !*** ./src/components/profile/profile.tsx ***!
  \********************************************/
/*! exports provided: Profile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.css */ "./src/components/profile/profile.css");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_profile_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_3__);




var Profile = function Profile() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_profile_css__WEBPACK_IMPORTED_MODULE_2__["Header"], _style_common_css__WEBPACK_IMPORTED_MODULE_3__["Block"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_profile_css__WEBPACK_IMPORTED_MODULE_2__["Header--Photo"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "//media.fandanzle.co.uk/avatar.png",
    alt: "avatar"
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_profile_css__WEBPACK_IMPORTED_MODULE_2__["Text--Header"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Alex brown Portfolio"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_profile_css__WEBPACK_IMPORTED_MODULE_2__["Description"])
  }, "A Developer with a passion for web development, security, networking and microservices.")));
};
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/components/skillz/skillz.css":
/*!******************************************!*\
  !*** ./src/components/skillz/skillz.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./skillz.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/skillz/skillz.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./skillz.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/skillz/skillz.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./skillz.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/skillz/skillz.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/skillz/skillz.tsx":
/*!******************************************!*\
  !*** ./src/components/skillz/skillz.tsx ***!
  \******************************************/
/*! exports provided: SkillzValue, Skillz, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillzValue", function() { return SkillzValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skillz", function() { return Skillz; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skillz_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skillz.css */ "./src/components/skillz/skillz.css");
/* harmony import */ var _skillz_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skillz_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_3__);



 //

var SkillzValue = function SkillzValue(_ref) {
  var values = _ref.values;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, values.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: _skillz_css__WEBPACK_IMPORTED_MODULE_2__["Skill--Badge"]
    }, item);
  }));
}; //

var skillzPayload = [{
  "key": "Javascript",
  "values": ['ES6', 'Node.js', 'Typescript', 'React', 'Angular', 'Microservices', 'Webpack', 'ExtJs', 'JQuery']
}, {
  "key": "Java",
  "values": ['Spring', 'Vert.X', "Microservices", "Custom Frameworks"]
}, {
  "key": "Misc",
  "values": ['Security', 'OAuth 1/2', "SAML", "Docker", "General design Principles"]
}, {
  "key": "Python",
  "values": ['Flask', 'TurboGears', 'System Intergration', 'Python 2 & 3']
}, {
  "key": "Devops/System",
  "values": ['Unix', 'Bash', 'AWS', 'GCloud', 'Azure', 'Kubernetes']
}, {
  "key": "PHP",
  "values": ['Custom Frameworks', 'Zend', 'Laravel']
}];
var Skillz = function Skillz() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_common_css__WEBPACK_IMPORTED_MODULE_3__["Block"])
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "Skills"), skillzPayload.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _skillz_css__WEBPACK_IMPORTED_MODULE_2__["Item--Skills"]
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _skillz_css__WEBPACK_IMPORTED_MODULE_2__["Skill"]
    }, item.key), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SkillzValue, {
      values: item.values
    }));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Skillz);

/***/ }),

/***/ "./src/containers/blog/blog.tsx":
/*!**************************************!*\
  !*** ./src/containers/blog/blog.tsx ***!
  \**************************************/
/*! exports provided: BlogView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogView", function() { return BlogView; });
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_8__);









var BlogView =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BlogView, _React$Component);

  function BlogView() {
    Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogView);

    return Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BlogView).apply(this, arguments));
  }

  Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_style_common_css__WEBPACK_IMPORTED_MODULE_8__["Align--Center"], _style_common_css__WEBPACK_IMPORTED_MODULE_8__["Container--Large"])
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Blog view"));
    }
  }]);

  return BlogView;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {})(BlogView));

/***/ }),

/***/ "./src/containers/home/home.css":
/*!**************************************!*\
  !*** ./src/containers/home/home.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/home/home.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/home/home.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-2-1!../../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/containers/home/home.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/containers/home/home.tsx":
/*!**************************************!*\
  !*** ./src/containers/home/home.tsx ***!
  \**************************************/
/*! exports provided: HomeView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeView", function() { return HomeView; });
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/about/about */ "./src/components/about/about.tsx");
/* harmony import */ var _components_contact_contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/contact/contact */ "./src/components/contact/contact.tsx");
/* harmony import */ var _components_skillz_skillz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/skillz/skillz */ "./src/components/skillz/skillz.tsx");
/* harmony import */ var _components_experiance_experiance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/experiance/experiance */ "./src/components/experiance/experiance.tsx");
/* harmony import */ var _components_education_education__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/education/education */ "./src/components/education/education.tsx");
/* harmony import */ var _components_profile_profile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/profile/profile */ "./src/components/profile/profile.tsx");
/* harmony import */ var _components_folio_folio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/folio/folio */ "./src/components/folio/folio.tsx");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home.css */ "./src/containers/home/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_15__);
















var HomeView =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomeView, _React$Component);

  function HomeView() {
    Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeView);

    return Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomeView).apply(this, arguments));
  }

  Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_common_css__WEBPACK_IMPORTED_MODULE_14__["Container"]
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_profile_profile__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _home_css__WEBPACK_IMPORTED_MODULE_15__["Content"]
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("aside", {
        className: _home_css__WEBPACK_IMPORTED_MODULE_15__["Description"]
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_about_about__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_experiance_experiance__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_education_education__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_folio_folio__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("aside", {
        className: _home_css__WEBPACK_IMPORTED_MODULE_15__["Breakdown"]
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_contact_contact__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_skillz_skillz__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
    }
  }]);

  return HomeView;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {})(HomeView));

/***/ }),

/***/ "./src/containers/notFound/notFound.tsx":
/*!**********************************************!*\
  !*** ./src/containers/notFound/notFound.tsx ***!
  \**********************************************/
/*! exports provided: NotFoundView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundView", function() { return NotFoundView; });
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../style/common.css */ "./src/style/common.css");
/* harmony import */ var _style_common_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_common_css__WEBPACK_IMPORTED_MODULE_8__);









var NotFoundView =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NotFoundView, _React$Component);

  function NotFoundView() {
    Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotFoundView);

    return Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NotFoundView).apply(this, arguments));
  }

  Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NotFoundView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_style_common_css__WEBPACK_IMPORTED_MODULE_8__["Align--Center"], _style_common_css__WEBPACK_IMPORTED_MODULE_8__["Container--Large"])
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Not found view"));
    }
  }]);

  return NotFoundView;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {})(NotFoundView));

/***/ }),

/***/ "./src/containers/routes.tsx":
/*!***********************************!*\
  !*** ./src/containers/routes.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home */ "./src/containers/home/home.tsx");
/* harmony import */ var _blog_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog/blog */ "./src/containers/blog/blog.tsx");
/* harmony import */ var _notFound_notFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notFound/notFound */ "./src/containers/notFound/notFound.tsx");












var AppRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppRouter, _React$Component);

  function AppRouter() {
    Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppRouter);

    return Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppRouter).apply(this, arguments));
  }

  Object(_home_alex_Development_fandanzle_v2_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppRouter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", null, "Fandanzle - Alex Brown"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "description",
        content: "Fandanzle - The personal website of Alex Brown @stump201 @fandanzle"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "og:title",
        property: "og:title",
        content: "Fandanzle - The personal website of Alex Brown @stump201 @fandanzle"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        property: "og:type",
        content: "website"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "robots",
        content: "index, follow"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/",
        component: _home_home__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        exact: true,
        path: "/blog/",
        component: _blog_blog__WEBPACK_IMPORTED_MODULE_9__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        component: _notFound_notFound__WEBPACK_IMPORTED_MODULE_10__["default"]
      })));
    }
  }]);

  return AppRouter;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AppRouter);

/***/ }),

/***/ "./src/ssr/server.tsx":
/*!****************************!*\
  !*** ./src/ssr/server.tsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "./node_modules/express/index.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cheerio */ "./node_modules/cheerio/index.js");
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/routes */ "./src/containers/routes.tsx");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _common_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/reducer */ "./src/common/reducer/index.ts");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");












var port = 3000;
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();

function handleRender(req, res) {
  //
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_11__["default"])(); // Create a new Redux store instance

  var store = Object(redux__WEBPACK_IMPORTED_MODULE_7__["createStore"])(_common_reducer__WEBPACK_IMPORTED_MODULE_10__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_7__["applyMiddleware"])(sagaMiddleware));
  var finalPath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../../public/index.html');
  var openHtml = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(finalPath);
  var loadItem = Object(cheerio__WEBPACK_IMPORTED_MODULE_4__["load"])(openHtml.toString()); // Render the component to a string

  var html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_8__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_9__["StaticRouter"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_containers_routes__WEBPACK_IMPORTED_MODULE_6__["default"], null)))); // Grab the initial state from our Redux store

  var preloadedState = store.getState(); // Send the rendered page back to the client

  res.send(preloadedState);
}

app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(__dirname, '../build/static')));
app.get('/', function (req, res) {
  handleRender(req, res);
});
app.listen(port, function () {
  return console.log('Example app listening on port 3000!');
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./src/style/common.css":
/*!******************************!*\
  !*** ./src/style/common.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-2-1!../../node_modules/postcss-loader/src??postcss!./common.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/style/common.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-2-1!../../node_modules/postcss-loader/src??postcss!./common.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/style/common.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-2-1!../../node_modules/postcss-loader/src??postcss!./common.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/style/common.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!****************************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/ssr/server.tsx ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/alex/Development/fandanzle-v2/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/alex/Development/fandanzle-v2/src/ssr/server.tsx */"./src/ssr/server.tsx");


/***/ }),

/***/ 1:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************!*\
  !*** ./streams (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** ./extend-node (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=server.js.map