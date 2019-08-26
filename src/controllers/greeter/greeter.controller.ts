import {grpc} from '@loopback/grpc';
import {
  Greeter,
  HelloRequest,
  HelloReply,
  TestRequest,
  TestReply,
} from './greeter.proto';
/**
 * @class GreeterCtrl
 * @description Implements grpc proto service
 **/
export class GreeterCtrl implements Greeter.Service {
  // Tell LoopBack that this is a Service RPC implementation
  @grpc(Greeter.sayHello)
  sayHello(request: HelloRequest): HelloReply {
    return {message: 'Hello ' + request.name};
  }
  @grpc(Greeter.sayTest)
  sayTest(request: TestRequest): TestReply {
    return {message: 'Hello ' + request.name};
  }
}
