type Props = { selectedCount: number; onMark: (cataloged: boolean) => void }

export function BulkActions({ selectedCount, onMark }: Props) {
  return <div className="bulk-actions"><span><strong>{selectedCount}</strong> selected</span><button type="button" onClick={() => onMark(true)} disabled={!selectedCount}>Mark cataloged</button><button type="button" className="quiet-button" onClick={() => onMark(false)} disabled={!selectedCount}>Move to queue</button></div>
}

