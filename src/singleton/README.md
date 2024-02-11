# Singleton

## Reference
[Refactoring.guru - Singleton](https://refactoring.guru/design-patterns/singleton)
[Otávio Miranda's video (pt-br)](https://www.youtube.com/watch?v=x9h8MgAvi_I)

## Objective
Ensures a class has **only one instance**, and **provides global access** to it.

## How it does
1. Default constructor must be private, so it's not possible to use the class with `new`
2. Creates a static method as a constructor, that calls the private constructor and stores it in a static attribute.

## When to use
- When a class should have only one instance to all clients;
- When you need strict control over global variables;

## Pros and Cons
✅ Be sure the class has only one instance;
✅ Global access point to the instance;
✅ Initialized only when it's requested for the first time;

❌ Violates the Single Responsibility Principle [(does it, though?)](https://dev.to/bourzayq_khalid/srp-is-the-most-misunderstood-principle--2b64);
❌ Can hide bad design choices, when the program know too much about each other;
❌ Requires special treatment when using multi-threaded environments;
❌ Difficult to mock the singleton class since the constructor is private.
