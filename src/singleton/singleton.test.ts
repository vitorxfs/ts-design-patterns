import { describe, it, expect, beforeEach } from 'vitest';
import { Singleton } from './singleton';

describe('Singleton', () => {
  beforeEach(() => {
    Singleton.instance.reset();
  });

  it('is possible to access instance statically', () => {
    expect(Singleton.instance instanceof Singleton).toBeTruthy();
  });

  it('should return the same instance everytime', () => {
    const instance1 = Singleton.instance;
    const instance2 = Singleton.instance;

    expect(instance1).toStrictEqual(instance2);
  });

  it('initializes num with zero', () => {
    expect(Singleton.instance.num).toBe(0);
  });

  it('is possible to increment num once', () => {
    Singleton.instance.increment();

    expect(Singleton.instance.num).toBe(1);
  });

  it('is possible to increment num more than once', () => {
    Singleton.instance.increment();
    Singleton.instance.increment();
    Singleton.instance.increment();
    Singleton.instance.increment();

    expect(Singleton.instance.num).toBe(4);
  });

  it('is possible to reset num after incrementing it', () => {
    Singleton.instance.increment();
    Singleton.instance.increment();
    Singleton.instance.increment();
    Singleton.instance.increment();
    Singleton.instance.reset();

    expect(Singleton.instance.num).toBe(0);
  });
});
