export interface Command {
  name: string;
  description: string;
  args?: {
    name: string;
    description: string;
    optional?: boolean;
  }[];
  example?: string;
  image?: string;
}

const command = [
  {
    name: 'checkpoint',
    description: 'Find a checkpoint and join it.',
    args: [
      {
        name: 'activity',
        description: 'Activity / encounter to search for.',
      },
    ],
  },
  {
    name: 'checkpoint-list',
    description: 'List all available checkpoints and their status.',
  },
  {
    name: 'crafted',
    description: 'View all crafted weapon levels.',
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
  },
  {
    name: 'lookup guardian-ranks',
    description: 'Look up triumphs and their completion status for Guardian Ranks.',
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
  },
  {
    name: 'metrics',
    description: 'Fetch metrics from your Destiny profile.',
    args: [
      {
        name: 'query',
        description: 'Specific the metric that you want to pull values for.',
      },
    ],
  },
  {
    name: 'pb raids',
    description: 'Gets your fastest raids.',
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
  },
  {
    name: 'server twitch add',
    description: 'Add a Twitch stream to the server.',
    args: [
      {
        name: 'twitchname',
        description: "The stream name you'd like to subscribe to.",
      },
      {
        name: 'channel',
        description: "The Discord channel you'd like me to post notifications to.",
      },
      {
        name: 'everyone',
        description: 'Should I ping everyone when they go live?',
        optional: true,
      },
      {
        name: 'role',
        description: 'Should I ping a role when they go live?',
        optional: true,
      },
      {
        name: 'discordname',
        description: 'If the streamer is in your server, I can mention them.',
        optional: true,
      },
    ],
  },
  {
    name: 'server twitch remove',
    description: 'Remove an existing Twitch stream from the server.',
    args: [
      {
        name: 'twitchname',
        description: "Stream name you'd like to unsubscribe from.",
      },
    ],
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
  },
  {
    name: 'server summary',
    description: 'Get a summary of current server settings',
  },
  {
    name: 'support',
    description: 'support',
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
  },
  {
    name: 'user register',
    description: 'Register your Bungie profile to the bot.',
  },
  {
    name: 'user remove',
    description: 'Remove your profile link from the bot.',
  },
  {
    name: 'vendor gunsmith',
    description: 'Fetch Banshee weapon inventory which includes D2Gunsmith and LightGG links.',
  },
  {
    name: 'vendor xur',
    description: 'Fetch Xür inventory which includes D2Gunsmith and LightGG links.',
  },
  {
    name: 'vendor ada-1',
    description: 'Get list of shaders currently available at Ada-l.',
  },
  {
    name: 'vendor saint-14',
    description: 'Fetch Saint-14 (Trials of Osiris) reputation rewards for the week.',
  },
] satisfies Command[];

export default command;
