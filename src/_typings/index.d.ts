import { HierarchyNode, Selection } from 'd3'

export interface IPartitionHierarchy {
  title: string
  type: string
  value?: number
  children?: IPartitionHierarchy[]
}

export interface IPartitionHierarchyDimensions {
  x0?: number
  x1?: number
  y0?: number
  y1?: number
  origin?: {
    x: number
    y: number
  }
}

export type PartitionHierarchyNode = HierarchyNode<IPartitionHierarchy> & IPartitionHierarchyDimensions

export interface IDrawingSelections {
  arrows: Selection<any, any, any, any>
  nodes: Selection<any, any, any, any>
  rectangles: Selection<any, any, any, any>
  html: Selection<any, any, any, any>
}

export type NodeHandler = (d: PartitionHierarchyNode) => string


type Times10 = (n: number) => number

/**
 * (D) Multiplies a given number by 10 and returns the result.
 * @param n The number to be multiplied by 10
 */
export declare const times10: Times10

type Times100 = (n: number) => number

/**
 * (D) Multiplies a given number by 100 and returns the result.
 * @param n The number to be multiplied by 100
 */
export declare const times100: Times100

export interface IAggregation {
  aggregationType: string
  name: string
  children?: IAggregation[]
}

export interface ID3PartitionProps {
  domNode: SVGSVGElement
  aggregations: IPartitionHierarchy
  aggregationChangeHandler: (order: string[]) => void
  customNodeHtmlHandler?: NodeHandler
  customNodeClassHandler?: NodeHandler
  customNodeColourHandler?: NodeHandler
}


type RenderD3PartitionLayout = (props: ID3PartitionProps) => void

export declare const renderD3PartitionLayout: RenderD3PartitionLayout
