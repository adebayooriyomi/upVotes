
import { render, fireEvent, screen } from '@testing-library/react';
import { UpVote } from '../components/UpVote';

test('background color changes based on click event', async () => {
  const mockOnClick = jest.fn();

  render(
    <UpVote onClick={mockOnClick} style={{ backgroundColor: '#F4F6F8' }}>
      {' '}
    </UpVote>
  );

  const upvoteElement = screen.getByTestId('upvote');

  const initialBackgroundColor = window.getComputedStyle(upvoteElement).getPropertyValue('background-color');

  fireEvent.click(upvoteElement);

  // Wait for the background color change
  setTimeout(() => {
    const updatedBackgroundColor = window.getComputedStyle(upvoteElement).getPropertyValue('background-color');
    expect(updatedBackgroundColor).not.toEqual(initialBackgroundColor);
  }, 10);
});






