import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import './test/setup'

describe('FossilNote app', () => {
  it('renders the sample load and progressbar', () => { render(<App />); expect(screen.getByRole('heading', { name: 'Dawn Cabinet' })).toBeInTheDocument(); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '40'); expect(screen.getByText('2 of 5 specimens cataloged')).toBeInTheDocument() })
  it('keeps selection when a status filter hides it', async () => { const user = userEvent.setup(); render(<App />); await user.click(screen.getByRole('checkbox', { name: 'Select Sea-glass breakfast trilobite' })); await user.click(screen.getByRole('radio', { name: 'Queued' })); expect(screen.getByText('1 selected (3 visible)')).toBeInTheDocument(); await user.click(screen.getByRole('radio', { name: 'All' })); expect(screen.getByRole('checkbox', { name: 'Select Sea-glass breakfast trilobite' })).toBeChecked() })
  it('marks selected specimens cataloged', async () => { const user = userEvent.setup(); render(<App />); await user.click(screen.getByRole('checkbox', { name: 'Select Tide line ammonite' })); await user.click(screen.getByRole('button', { name: 'Mark cataloged' })); expect(screen.getByRole('checkbox', { name: 'Select Tide line ammonite' })).not.toBeChecked(); expect(screen.getByText('3 of 5 specimens cataloged')).toBeInTheDocument() })
  it('adds a new piece row', async () => { const user = userEvent.setup(); render(<App />); await user.type(screen.getByLabelText('Specimen name'), 'Dawn cup'); await user.click(screen.getByRole('button', { name: /Add to / })); expect(screen.getByText('Dawn cup')).toBeInTheDocument() })
  it('hides non-priority rows with priority-only', async () => { const user = userEvent.setup(); render(<App />); const table = screen.getByRole('table'); expect(within(table).getByText('Tide line ammonite')).toBeInTheDocument(); await user.click(screen.getByRole('checkbox', { name: 'Priority only' })); expect(within(table).queryByText('Tide line ammonite')).not.toBeInTheDocument(); expect(within(table).getByText('Blue hour ferns')).toBeInTheDocument() })
})
