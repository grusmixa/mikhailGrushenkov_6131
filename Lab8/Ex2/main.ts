// Глобальный список инстансов классов
const instancesMap = new Map<string, any>();

function Injectable({ key }: { key: string }): ClassDecorator {
  return (target: any) => {
    const instance = new target();
    instancesMap.set(key, instance);
    return target;
  };
}

function Inject(key: string): PropertyDecorator {
  return (target: any, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      configurable: true,
      enumerable: true,
      get(this: any) {
        return instancesMap.get(key);
      },
    });
  };
}

class ExampleClass {
  message: string = 'Hello, world!';
}

@Injectable({ key: 'exampleKey' })
class MyService {
  exampleInstance = new ExampleClass();
}

class MyClass {
  @Inject('exampleKey')
  service!: MyService;

  printMessage() {
    console.log(this.service.exampleInstance.message);
  }
}

const instance = new MyClass();
instance.printMessage(); // Вывод: Hello, world!
