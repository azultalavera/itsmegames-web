export type Language = 'en' | 'es';

export interface MilestoneTranslation {
  year: string;
  title: string;
  description: string;
}

export interface TeamMemberTranslation {
  name: string;
  role: string;
  description: string;
}

export interface SponsorTranslation {
  name: string;
  tier: string;
  description: string;
}

export interface GameTranslation {
  title: string;
  status: string;
  description: string;
  tags: string[];
}

export interface Translations {
  navbar: {
    home: string;
    games: string;
    story: string;
    team: string;
    sponsors: string;
  };
  hero: {
    titleLine1: string;
    titleLine2Pre: string;
    titleLine2Highlight: string;
    description: string;
    badge: string;
    explore: string;
  };
  games: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
    statusLabel: string;
    compiling: string;
    clickToEnter: string;
    clickToView: string;
    layer8: GameTranslation;
  };
  about: {
    title: string;
    subtitle: string;
    milestones: MilestoneTranslation[];
  };
  team: {
    title: string;
    subtitle: string;
    viewInfo: string;
    members: Record<string, TeamMemberTranslation>;
  };
  sponsors: {
    badge: string;
    titlePre: string;
    titleHighlight: string;
    subtitle: string;
    viewInfo: string;
    partners: Record<string, SponsorTranslation>;
  };
  footer: {
    founderRole: string;
    emailLabel: string;
    telLabel: string;
  };
  layer8: {
    hero: {
      alert: string;
      tagline: string;
      genre: string;
      platform: string;
      target: string;
      releaseDate: string;
    };
    controlPanel: {
      tabs: {
        concept: string;
        upgrades: string;
        npcs: string;
        specs: string;
      };
      concept: {
        title: string;
        p1: string;
        beginningTitle: string;
        beginningText: string;
        progressionTitle: string;
        progressionText: string;
      };
      upgrades: {
        title: string;
        description: string;
        permanentTitle: string;
        permanentList: Array<{ title: string; desc: string }>;
        glitchesTitle: string;
        penaltyLabel: string;
        glitchesList: Array<{ title: string; desc: string; penalty: string }>;
      };
      npcs: {
        title: string;
        description: string;
        list: Array<{ name: string; desc: string; isRed?: boolean }>;
      };
      specs: {
        title: string;
        minTitle: string;
        recTitle: string;
        minGpu: string;
        minStorage: string;
        recCpu: string;
        recGpu: string;
        recStorage: string;
      };
    };
    objectives: {
      titlePre: string;
      titleHighlight: string;
      items: Array<{ number: string; title: string; desc: string; isRed?: boolean }>;
    };
    osiLayers: {
      titlePre: string;
      titleHighlight: string;
      mapPrompt: string;
      layers: Array<{
        tag: string;
        title: string;
        desc: string;
        highlightText: string;
        isRed?: boolean;
      }>;
    };
    synergies: {
      titlePre: string;
      titleHighlight: string;
      items: Array<{ title: string; desc: string }>;
    };
    signup: {
      title: string;
      prompt1: string;
      prompt2: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      btnSubmit: string;
      btnSuccess: string;
      msgSuccess: string;
      msgError: string;
    };
    contact: {
      title: string;
      role: string;
      gdd: string;
    };
  };
  switch: {
    ariaLabel: string;
    enTitle: string;
    esTitle: string;
  };
  notFound: {
    description: string;
    respawn: string;
  };
}
