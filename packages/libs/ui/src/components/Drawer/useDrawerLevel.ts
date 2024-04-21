import { useEffect, useId, useState } from 'react';
import { Listener } from '@easypizi/common';
import type { DrawerPosition } from './styled';

interface EventMap {
  change: null;
}

class DrawerLevels extends Listener<EventMap> {
  levels: Record<DrawerPosition, string[]> = {
    bottom: [],
    left: [],
    right: [],
    top: [],
  };

  add = (id: string, position: DrawerPosition) => {
    this.levels[position].unshift(id);
    this.trigger('change', null);
  };

  remove = (id: string) => {
    const position = this.getPosition(id);
    if (!position) {
      return;
    }

    this.levels[position] = this.levels[position].filter((x) => x !== id);
    this.trigger('change', null);
  };

  getLevel = (id: string) => {
    const position = this.getPosition(id);
    if (!position) {
      return 0;
    }
    const index = this.levels[position].indexOf(id);
    return index < 0 ? 0 : index;
  };

  private getPosition = (id: string): DrawerPosition | null => {
    let position: DrawerPosition | null = null;
    (Object.keys(this.levels) as DrawerPosition[]).forEach((x) => {
      if (this.levels[x]?.includes(id)) {
        position = x;
      }
    });
    return position;
  };
}

const levels = new DrawerLevels();

export const useDrawerLevel = (
  enabled: boolean,
  isOpen: boolean,
  position: DrawerPosition,
): number => {
  const [level, setLevel] = useState(0);
  const id = useId();

  useEffect(() => {
    return levels.on('change', () => {
      setLevel(levels.getLevel(id));
    });
  }, [id]);

  useEffect(() => {
    if (enabled && isOpen) {
      levels.add(id, position);
      return () => {
        levels.remove(id);
      };
    }
    return undefined;
  }, [enabled, id, isOpen, position]);

  return level;
};
