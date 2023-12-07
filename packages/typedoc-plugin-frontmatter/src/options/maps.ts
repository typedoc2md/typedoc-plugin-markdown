export const FrontmatterNamingConvention = {
  CamelCase: 'camelCase',
  SnakeCase: 'snakeCase',
} as const;

export type FrontmatterNamingConvention =
  (typeof FrontmatterNamingConvention)[keyof typeof FrontmatterNamingConvention];
