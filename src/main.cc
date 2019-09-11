#include <nan.h>
#include <iostream>
#include "logger.h"

NAN_MODULE_INIT(Init) {
    Logger::Init(target);
}

NODE_MODULE(spdlog, Init)
