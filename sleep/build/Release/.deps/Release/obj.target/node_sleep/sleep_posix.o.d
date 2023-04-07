cmd_Release/obj.target/node_sleep/sleep_posix.o := g++ -o Release/obj.target/node_sleep/sleep_posix.o ../sleep_posix.cc '-DNODE_GYP_MODULE_NAME=node_sleep' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DBUILDING_NODE_EXTENSION' -I/home/npham/.cache/node-gyp/19.8.1/include/node -I/home/npham/.cache/node-gyp/19.8.1/src -I/home/npham/.cache/node-gyp/19.8.1/deps/openssl/config -I/home/npham/.cache/node-gyp/19.8.1/deps/openssl/openssl/include -I/home/npham/.cache/node-gyp/19.8.1/deps/uv/include -I/home/npham/.cache/node-gyp/19.8.1/deps/zlib -I/home/npham/.cache/node-gyp/19.8.1/deps/v8/include -I../../nan  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -fPIC -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions -std=gnu++17 -MMD -MF ./Release/.deps/Release/obj.target/node_sleep/sleep_posix.o.d.raw   -c
Release/obj.target/node_sleep/sleep_posix.o: ../sleep_posix.cc ../sleep.h \
 ../../nan/nan.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/node_version.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/uv.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/uv/errno.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/uv/version.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/uv/unix.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/uv/threadpool.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/uv/linux.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/node.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/cppgc/common.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8config.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-array-buffer.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-local-handle.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-internal.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-version.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8config.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-object.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-maybe.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-persistent-handle.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-weak-callback-info.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-primitive.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-data.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-value.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-traced-handle.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-container.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-context.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-snapshot.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-date.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-debug.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-script.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-message.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-exception.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-extension.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-external.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-function.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-function-callback.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-template.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-memory-span.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-initialization.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-callbacks.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-promise.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-isolate.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-embedder-heap.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-microtask.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-statistics.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-unwinder.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-embedder-state-scope.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-platform.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-json.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-locker.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-microtask-queue.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-primitive-object.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-proxy.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-regexp.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-typed-array.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-value-serializer.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/v8-wasm.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/node_version.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/node_buffer.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/node.h \
 /home/npham/.cache/node-gyp/19.8.1/include/node/node_object_wrap.h \
 ../../nan/nan_callbacks.h ../../nan/nan_callbacks_12_inl.h \
 ../../nan/nan_maybe_43_inl.h ../../nan/nan_converters.h \
 ../../nan/nan_converters_43_inl.h ../../nan/nan_new.h \
 ../../nan/nan_implementation_12_inl.h ../../nan/nan_persistent_12_inl.h \
 ../../nan/nan_weak.h ../../nan/nan_object_wrap.h ../../nan/nan_private.h \
 ../../nan/nan_typedarray_contents.h ../../nan/nan_json.h \
 ../../nan/nan_scriptorigin.h
../sleep_posix.cc:
../sleep.h:
../../nan/nan.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/node_version.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/uv.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/uv/errno.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/uv/version.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/uv/unix.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/uv/threadpool.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/uv/linux.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/node.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/cppgc/common.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8config.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-array-buffer.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-local-handle.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-internal.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-version.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8config.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-object.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-maybe.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-persistent-handle.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-weak-callback-info.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-primitive.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-data.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-value.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-traced-handle.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-container.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-context.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-snapshot.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-date.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-debug.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-script.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-message.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-exception.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-extension.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-external.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-function.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-function-callback.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-template.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-memory-span.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-initialization.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-callbacks.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-promise.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-isolate.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-embedder-heap.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-microtask.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-statistics.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-unwinder.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-embedder-state-scope.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-platform.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-json.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-locker.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-microtask-queue.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-primitive-object.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-proxy.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-regexp.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-typed-array.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-value-serializer.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/v8-wasm.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/node_version.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/node_buffer.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/node.h:
/home/npham/.cache/node-gyp/19.8.1/include/node/node_object_wrap.h:
../../nan/nan_callbacks.h:
../../nan/nan_callbacks_12_inl.h:
../../nan/nan_maybe_43_inl.h:
../../nan/nan_converters.h:
../../nan/nan_converters_43_inl.h:
../../nan/nan_new.h:
../../nan/nan_implementation_12_inl.h:
../../nan/nan_persistent_12_inl.h:
../../nan/nan_weak.h:
../../nan/nan_object_wrap.h:
../../nan/nan_private.h:
../../nan/nan_typedarray_contents.h:
../../nan/nan_json.h:
../../nan/nan_scriptorigin.h:
