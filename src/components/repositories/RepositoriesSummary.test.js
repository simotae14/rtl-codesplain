import { render, screen } from '@testing-library/react';

import RepositoriesSummary from './RepositoriesSummary';

test('it displays the primary language of the repository', () => {
  const repository = {
    stargazers_count: 5,
    open_issues: 30,
    forks: 1,
    language: 'Javascript'
  }
  render(<RepositoriesSummary repository={repository} />);
  const language = screen.getByText('Javascript');

  expect(language).toBeInTheDocument();
});