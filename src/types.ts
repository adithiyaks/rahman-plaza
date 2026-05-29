/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FloorItem {
  name: string;
  category: string;
  brands: string[];
  materials: string[];
  description: string;
}

export interface Floor {
  id: number;
  level: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  categories: string[];
  brands: string[];
  materials: string[];
  highlights: string[];
  details: FloorItem[];
}

export type BranchId = 'plaza' | 'palladium' | 'khalifa';

export interface Branch {
  id: BranchId;
  name: string;
  tagline: string;
  description: string;
  image: string;
  themeColor: string;
  primaryAccent: string;
  secondaryAccent: string;
}

export interface JewelryCollection {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  materials: string[];
}

export interface FootwearItem {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  badge?: string;
  description: string;
}
