export type PieceCategory = 'trilobite' | 'ammonite' | 'fern' | 'bone' | 'shell'

export type Piece = {
  id: string
  name: string
  category: PieceCategory
  number: number
  cataloged: boolean
  priority: boolean
  notes: string
}

export type KilnLoad = {
  id: string
  name: string
  studio: string
  city: string
  firingDate: string
  coolDate: string
  pieces: Piece[]
}

export type Filters = {
  query: string
  category: PieceCategory | 'all'
  status: 'all' | 'cataloged' | 'waiting'
  priorityOnly: boolean
}

