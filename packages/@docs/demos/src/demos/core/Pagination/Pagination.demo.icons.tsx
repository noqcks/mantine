import React from 'react';
import {
  IconArrowBarToLeft,
  IconArrowBarToRight,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';
import { Group, Pagination } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Group, Pagination } from '@mantine/core';
import {
  IconArrowBarToRight,
  IconArrowBarToLeft,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={() => <IconArrowRight stroke="2" />}
        previousIcon={() => <IconArrowLeft stroke="2" />}
        firstIcon={() => <IconArrowBarToLeft stroke="2" />}
        lastIcon={() => <IconArrowBarToRight stroke="2" />}
        dotsIcon={() => <IconGripHorizontal stroke="2" />}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={IconArrowBarToLeft} />
          <Pagination.Previous icon={IconArrowLeft} />
          <Pagination.Items dotsIcon={IconGripHorizontal} />
          <Pagination.Next icon={IconArrowRight} />
          <Pagination.Last icon={IconArrowBarToRight} />
        </Group>
      </Pagination.Root>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={<IconArrowRight stroke="2" />}
        previousIcon={<IconArrowLeft stroke="2" />}
        firstIcon={<IconArrowBarToLeft stroke="2" />}
        lastIcon={<IconArrowBarToRight stroke="2" />}
        dotsIcon={<IconGripHorizontal stroke="2" />}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={IconArrowBarToLeft} />
          <Pagination.Previous icon={IconArrowLeft} />
          <Pagination.Items dotsIcon={IconGripHorizontal} />
          <Pagination.Next icon={IconArrowRight} />
          <Pagination.Last icon={IconArrowBarToRight} />
        </Group>
      </Pagination.Root>
    </>
  );
}

export const icons: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
