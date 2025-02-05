// src/components/atoms/SelectInput/SelectInput.test.tsx
import { fireEvent, render, screen } from '@/tests/test-utils';

import { SelectInput } from './SelectInput';

describe('SelectInput', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  it('renders the select input with the default selected option', () => {
    const { container } = render(<SelectInput options={options} />);

    // Verifica se a primeira opção está selecionada por padrão
    expect(screen.getByText('Option 1')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('opens the dropdown menu when the button is clicked', () => {
    render(<SelectInput options={options} />);

    // O dropdown deve estar inicialmente fechado
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();

    // Clica no botão para abrir o dropdown
    fireEvent.click(screen.getByText('Option 1'));

    // Verifica se as opções são exibidas
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('selects a new option when it is clicked', () => {
    render(<SelectInput options={options} />);

    // Abre o dropdown
    fireEvent.click(screen.getByText('Option 1'));

    // Clica na segunda opção
    fireEvent.click(screen.getByText('Option 2'));

    // Verifica se a opção foi selecionada
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('closes the dropdown menu after selecting an option', () => {
    render(<SelectInput options={options} />);

    // Abre o dropdown
    fireEvent.click(screen.getByText('Option 1'));

    // Clica na segunda opção
    fireEvent.click(screen.getByText('Option 2'));

    // Verifica se o dropdown foi fechado
    expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
  });
});
