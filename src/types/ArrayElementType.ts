export type ArrayElementType<T> = T extends (infer U)[] ? U : never;
