//
//  logger.h
//  binding
//
//  Created by zhangdz on 2019/8/31.
//

#ifndef logger_h
#define logger_h

#include <nan.h>
#include <spdlog/spdlog.h>
#include <spdlog/async.h>
#include <spdlog/sinks/daily_file_sink.h>

using namespace v8;

class Logger : public Nan::ObjectWrap {
public:
    static NAN_MODULE_INIT(Init);
private:
    explicit Logger(std::shared_ptr<spdlog::logger> logger);
    ~Logger();
    
    static NAN_METHOD(New);
    static NAN_METHOD(Critical);
    static NAN_METHOD(Error);
    static NAN_METHOD(Warn);
    static NAN_METHOD(Info);
    static NAN_METHOD(Debug);
    static NAN_METHOD(Trace);
    
    static NAN_METHOD(GetLevel);
    static NAN_METHOD(SetLevel);
    static NAN_METHOD(Flush);
    static NAN_METHOD(Drop);
    static NAN_METHOD(SetPattern);
    
    static Nan::Persistent<v8::Function> constructor;

    std::shared_ptr<spdlog::logger> logger_;
};

#endif /* logger_h */
