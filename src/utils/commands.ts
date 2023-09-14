import type { ImageMetadata } from 'astro';

type Image = Promise<{ default: ImageMetadata }>;

export interface Command {
  name: string;
  description: string;
  args?: {
    name: string;
    description: string;
    optional?: boolean;
  }[];
  example?: string;
  image?: Image;
}

const resolveImage = (img: string): Image => import(`../assets/images/${img}.gif`);

const commands = [
  {
    name: 'checkpoint',
    description: 'Find a checkpoint and join it.',
    args: [
      {
        name: 'activity',
        description: 'Activity / encounter to search for.',
      },
    ],
    image: resolveImage('checkpoint'),
  },
  {
    name: 'checkpoint-list',
    description: 'List all available checkpoints and their status.',
    image: resolveImage('checkpoint-list'),
  },
  {
    name: 'crafted',
    description: 'View all crafted weapon levels.',
    image: resolveImage('crafted'),
  },
  {
    name: 'emblem rarest',
    description: 'Gets the top rarest emblems in collections.',
    args: [
      {
        name: 'count',
        description: 'Number of rarest emblems to fetch. (default = 5, between 1 and 50)',
        optional: true,
      },
      {
        name: 'bungie-name',
        description: 'The Bungie name of the requested user (Guardian#1234).',
        optional: true,
      },
    ],
    image: resolveImage('emblem-rarest'),
  },
  {
    name: 'emblem shares',
    description: 'Look up account shared emblems of a player.',
    args: [
      {
        name: 'bungie-name',
        description: 'The Bungie name of the requested user (Guardian#1234).',
        optional: true,
      },
    ],
    image: resolveImage('emblem-shares'),
  },
  {
    name: 'lookup guardian',
    description: 'Look up a profile of a player.',
    args: [
      {
        name: 'bungie-name',
        description: 'The Bungie name of the requested user (Guardian#1234). Defaults to your own.',
        optional: true,
      },
    ],
    image: resolveImage('lookup-guardian'),
  },
  {
    name: 'lookup guardian-ranks',
    description: 'Look up triumphs and their completion status for Guardian Ranks.',
    image: resolveImage('lookup-guardian-ranks'),
  },
  {
    name: 'lookup wish',
    description: 'Look up patterns for the Last Wish raid.',
    args: [
      {
        name: 'wish',
        description: 'A wish number from the Last Wish raid.',
      },
    ],
    image: resolveImage('lookup-wish'),
  },

  {
    name: 'loot-table',
    description: 'Get loot tables from dungeons or raids.',
    args: [
      {
        name: 'loot-table',
        description: 'A Dungeon or Raid to look up loot tables for.',
      },
    ],
    image: resolveImage('loot-table'),
  },
  {
    name: 'memento',
    description: 'Curious to see how a memento will look?',
    args: [
      {
        name: 'source',
        description: 'Where does the weapon you want to check out come from?',
      },
      {
        name: 'weapon',
        description: 'Name of the weapon you want to see.',
      },
      {
        name: 'type',
        description: 'What type of memento are you looking for?',
      },
    ],
    image: resolveImage('memento'),
  },
  {
    name: 'recipes',
    description: 'View current progression towards weapon recipes.',
    args: [
      {
        name: 'show-all',
        description: 'Show complete patterns. (default: false)',
        optional: true,
      },
    ],
    image: resolveImage('recipes'),
  },
  {
    name: 'roll-finder',
    description: 'Find a recommended roll for a specific weapon for a curated list.',
    args: [
      {
        name: 'game-mode',
        description: 'Game mode to suggest rolls for.',
      },
      {
        name: 'weapon-name',
        description: 'Name of the weapon to search for.',
      },
    ],
    image: resolveImage('roll-finder'),
  },
  {
    name: 'server configure',
    description: 'Set up your server.',
    args: [
      {
        name: 'announcements',
        description: 'Which channel should Felicity send announcements related to bot services?',
      },
      {
        name: 'staff',
        description: 'Which channel should Felicity send STAFF-ONLY announcements to?',
      },
      {
        name: 'memberchannel',
        description: 'Which channel do I send to?',
        optional: true,
      },
      {
        name: 'memberjoined',
        description: 'Should I send messages when a member joins?',
        optional: true,
      },
      {
        name: 'memberleft',
        description: 'Should I send messages when a member leaves?',
        optional: true,
      },
    ],
    image: resolveImage('server-configure'),
  },
  {
    name: 'server summary',
    description: 'Get a summary of current server settings',
    image: resolveImage('server-summary'),
  },
  {
    name: 'support',
    description: 'support',
    image: resolveImage('support'),
  },
  {
    name: 'twab',
    description: 'Where TWAB?',
    args: [
      {
        name: 'query',
        description: 'Search TWABs for a phrase or word. If null, latest TWAB will be returned.',
        optional: true,
      },
    ],
    image: resolveImage('twab'),
  },
  {
    name: 'user register',
    description: 'Register your Bungie profile to the bot.',
    image: resolveImage('user-register'),
  },
  {
    name: 'user remove',
    description: 'Remove your profile link from the bot.',
    image: resolveImage('user-remove'),
  },
  {
    name: 'vendor ada-1',
    description: 'Get list of shaders currently available at Ada-l.',
    image: resolveImage('vendor-ada-1'),
  },
  {
    name: 'vendor gunsmith',
    description: 'Fetch Banshee weapon inventory which includes D2Gunsmith and LightGG links.',
    image: resolveImage('vendor-gunsmith'),
  },
  {
    name: 'vendor saint14',
    description: 'Fetch Saint-14 (Trials of Osiris) reputation rewards for the week.',
    image: resolveImage('vendor-saint14'),
  },
  {
    name: 'vendor xur',
    description: 'Fetch Xür inventory which includes D2Gunsmith and LightGG links.',
    image: resolveImage('vendor-xur'),
  },
] satisfies Command[];

export default commands;
