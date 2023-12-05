import { Header, Text } from 'grommet';
import { Previous } from 'grommet-icons';
import React from 'react';
import HorizontalCenter from '../shared/react-pure/HorizontalCenter';

export function AppBar({ title, hasBack }) {
  return (
    <Header pad="12px 16px" responsive={false} justify="between">
      <HorizontalCenter>
        {hasBack && (
          <Previous
            onClick={() => {
              window.history.back();
            }}
          />
        )}
        <Text size="large" margin="0 0 0 1rem">
          {title}
        </Text>
      </HorizontalCenter>
    </Header>
  );
}
