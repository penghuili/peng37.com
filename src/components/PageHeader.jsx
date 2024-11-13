import Button from '@douyinfe/semi-ui/lib/es/button';
import Image from '@douyinfe/semi-ui/lib/es/image';
import { RiArrowLeftLine } from '@remixicon/react';
import { useRouter } from 'next/router';
import React from 'react';

import { Flex } from './Flex';
import { LazySpin } from './LazySpin';
import { Section } from './Section';

export function PageHeader({ title, right, isLoading, hasBack }) {
  const router = useRouter();

  const renderIconElement = () => {
    if (hasBack) {
      return (
        <Button
          type="primary"
          theme="borderless"
          icon={<RiArrowLeftLine />}
          onClick={() => router.back()}
        />
      );
    }

    return (
      <Image
        src="/icons/icon-192.png"
        width={32}
        height={32}
        preview={false}
        style={{ marginRight: '0.5rem' }}
      />
    );
  };

  return (
    <Section
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--semi-color-bg-0)',
        zIndex: 2,
      }}
    >
      <Flex direction="row" justify="between" align="center" titleAlign="left" p="0.5rem">
        <Flex direction="row" align="center">
          {renderIconElement()} {title} {isLoading && <LazySpin style={{ marginLeft: '1rem' }} />}
        </Flex>
        {right && (
          <Flex direction="row" align="center">
            {right}
          </Flex>
        )}
      </Flex>
    </Section>
  );
}
