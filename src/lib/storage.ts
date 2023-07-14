import type { KilnLoad } from '../types'

const STORAGE_KEY = 'fossilnote.loads'

export function sampleKilnLoads(): KilnLoad[] {
  return [
    {
      id: 'load-amber', name: 'Dawn Cabinet', studio: 'River Museum', city: 'Alexandria', firingDate: '2026-08-21', coolDate: '2026-08-23',
      pieces: [
        { id: 'amber-01', name: 'Sea-glass breakfast trilobite', category: 'trilobite', number: 1, cataloged: true, priority: true, notes: 'Celadon rim; handle needs a gentle shelf.' },
        { id: 'amber-02', name: 'Tide line ammonite', category: 'ammonite', number: 2, cataloged: false, priority: false, notes: 'Oxide wash on the outside.' },
        { id: 'amber-03', name: 'Blue hour ferns', category: 'fern', number: 3, cataloged: false, priority: true, notes: 'Commission set, keep together.' },
        { id: 'amber-04', name: 'Quiet reed bone', category: 'bone', number: 4, cataloged: false, priority: false, notes: 'Leave space around the neck.' },
        { id: 'amber-05', name: 'Little sun shell', category: 'shell', number: 5, cataloged: true, priority: false, notes: 'Photograph before packing.' }
      ]
    },
    {
      id: 'load-cinder', name: 'Stone Memory', studio: 'Basalt Annex', city: 'Cairo', firingDate: '2026-08-28', coolDate: '2026-08-30',
      pieces: [
        { id: 'cinder-01', name: 'Ash handle tumbler', category: 'trilobite', number: 1, cataloged: false, priority: true, notes: 'Test glaze A7.' },
        { id: 'cinder-02', name: 'Salt pocket ammonite', category: 'ammonite', number: 2, cataloged: false, priority: false, notes: 'Place on a cookie.' },
        { id: 'cinder-03', name: 'Night market bone', category: 'bone', number: 3, cataloged: false, priority: false, notes: 'Tall shelf only.' }
      ]
    }
  ]
}

export function loadKilnLoads(): KilnLoad[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return sampleKilnLoads()
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) throw new Error('Invalid kiln data')
    return parsed as KilnLoad[]
  } catch {
    return sampleKilnLoads()
  }
}

export function saveKilnLoads(loads: KilnLoad[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(loads))
}

