
import { EssaySection } from './types';

export const essayData: EssaySection[] = [
  {
    id: 'top-triangle',
    type: 'intro',
    title: 'Introduction',
    subtitle: 'Top Triangle (15%)',
    percentage: 15,
    iconName: 'triangle',
    colorTheme: 'slate',
    content: [
      {
        id: 'intro-1',
        title: '1. General Introduction',
        description: 'Setting the stage: The late Republic’s instability and moral decline.',
        blocks: [
          {
            id: 'intro-1-p1',
            title: 'Paragraph 1 (Context)',
            bullets: [
              { id: 'i1-1', text: 'Late Republic: characterized by instability, elite rivalry, and moral decline.' },
              { id: 'i1-2', text: 'Rome became corrupt with luxury & ambition after the destruction of Carthage.', citation: 'Sallust Cat. 10–13' },
              { id: 'i1-3', text: 'Decay of mos maiorum (ancestral values) and discipline.', citation: 'Livy Praef.' },
              { id: 'i1-4', text: 'Ambition grew faster than Rome’s institutions could contain.', citation: 'Appian BC 1 Pref.' },
              { id: 'i1-5', text: 'Violence escalates: Gracchi → Saturninus → Social War.' },
              { id: 'i1-6', text: 'Rome looks powerful externally but is internally fractured.' }
            ]
          }
        ]
      },
      {
        id: 'intro-2',
        title: '2. Narrow Toward Sulla',
        description: 'Why Sulla stands out as the unique turning point.',
        blocks: [
          {
            id: 'intro-2-p2',
            title: 'Paragraph 2 (The Turning Point)',
            bullets: [
              { id: 'i2-1', text: 'Sulla stands out as a uniquely dangerous figure of the late Republic.' },
              { id: 'i2-2', text: 'First Roman to march an army on Rome itself.', citation: 'Plut. Sull. 9' },
              { id: 'i2-3', text: 'First to use proscriptions as systematic state-sponsored murder.', citation: 'App. BC 1.95' },
              { id: 'i2-4', text: 'Takes the dictatorship to rewrite the constitution alone.' },
              { id: 'i2-5', text: 'Plutarch claims Sulla’s march had "no precedent."', isQuote: true },
              { id: 'i2-6', text: 'Appian calls Sulla’s civil wars "new and terrible."', isQuote: true },
              { id: 'i2-7', text: 'Decades later, the state was still "living under Sulla’s shadow."', isQuote: true, citation: 'Cicero' }
            ]
          }
        ]
      },
      {
        id: 'intro-3',
        title: '3. Thesis Statement',
        description: 'The core argument driving the essay.',
        blocks: [
          {
            id: 'intro-3-p3',
            title: 'Paragraph 3 (Thesis)',
            bullets: [
              { id: 'i3-1', text: 'Thesis: Sulla made the fall of the Republic inevitable by normalizing violence, dismantling institutions, and creating the blueprint for later autocrats.', isQuote: true },
              { id: 'i3-2', text: 'Evidence will be drawn from Plutarch, Appian, Sallust, Cicero, and Velleius.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'middle-diamond',
    type: 'body',
    title: 'The Body',
    subtitle: 'Middle Diamond (70%)',
    percentage: 70,
    iconName: 'diamond',
    colorTheme: 'blue',
    content: [
      {
        id: 'body-1',
        title: 'Argument 1: Normalized Violence',
        description: 'How political disputes turned into structural military force (20%).',
        blocks: [
          {
            id: 'b1-p1',
            title: 'Paragraph 1 (Setting the Stage)',
            bullets: [
              { id: 'b1-1', text: 'Violence existed before Sulla but was limited (Gracchi riots, Saturninus).' },
              { id: 'b1-2', text: 'These were fundamentally political disturbances, not militarized warfare.' },
              { id: 'b1-3', text: 'Sacred rule: no armed legions allowed inside Rome or across the pomerium.' }
            ]
          },
          {
            id: 'b1-p2',
            title: 'Paragraph 2 (First March on Rome)',
            bullets: [
              { id: 'b1-4', text: 'Sulla breaks the 400-year taboo.' },
              { id: 'b1-5', text: '"An act without precedent among Romans."', isQuote: true, citation: 'Plut. Sull. 9' },
              { id: 'b1-6', text: 'Sulla orders soldiers to attack their own countrymen.' },
              { id: 'b1-7', text: 'Sulla ignores envoys and presses forward with the legion.', citation: 'App. BC 1.58–60' },
              { id: 'b1-8', text: 'Transforms political logic: force replaces debate.' }
            ]
          },
          {
            id: 'b1-p3',
            title: 'Paragraph 3 (Second Civil War)',
            bullets: [
              { id: 'b1-9', text: 'Returns from Mithridates campaign with hardened veterans.' },
              { id: 'b1-10', text: 'Slaughter throughout the city; no distinction between citizens and enemies.', citation: 'App. BC 1.63' },
              { id: 'b1-11', text: 'Sets the template for urban warfare in future civil wars.' }
            ]
          },
          {
            id: 'b1-p4',
            title: 'Paragraph 4 (Proscriptions)',
            bullets: [
              { id: 'b1-12', text: 'Proscriptions = legalized murder for political ends.' },
              { id: 'b1-13', text: 'Sulla "revived ancient evil."', isQuote: true, citation: 'App. BC 1.95' },
              { id: 'b1-14', text: 'Heads posted in the Forum.', citation: 'Plut. Sull. 31' },
              { id: 'b1-15', text: 'Creates a climate of fear and opportunism.' },
              { id: 'b1-16', text: 'Sullan veterans become the nucleus of Catiline’s later conspiracy.', citation: 'Sall. Cat. 16' }
            ]
          },
          {
            id: 'b1-p5',
            title: 'Paragraph 5 (Mini Conclusion)',
            bullets: [
              { id: 'b1-17', text: 'After Sulla, political actors expect war as a viable option.' },
              { id: 'b1-18', text: 'Violence becomes normalized; Republic moves toward inevitable collapse.' }
            ]
          }
        ]
      },
      {
        id: 'body-2',
        title: 'Argument 2: Dismantled Institutions',
        description: 'Weakening the checks and balances of the constitution (20%).',
        blocks: [
          {
            id: 'b2-p1',
            title: 'Paragraph 1 (Overview)',
            bullets: [
              { id: 'b2-1', text: 'Sulla claims "restoration" but actually weakens constitutional balance.' },
              { id: 'b2-2', text: 'Targets tribunate, Senate structure, courts, and political advancement.' }
            ]
          },
          {
            id: 'b2-p2',
            title: 'Paragraph 2 (The Tribunate)',
            bullets: [
              { id: 'b2-3', text: 'Tribunes lose legislative initiative.', citation: 'Plut. Sull. 33–35' },
              { id: 'b2-4', text: 'Banned from holding later offices → makes it a career dead end.' },
              { id: 'b2-5', text: 'Eliminates plebeian voice; removes check on elite.' },
              { id: 'b2-6', text: 'Cicero: the tribunate has been "brought low."', isQuote: true, citation: 'De Leg. 3' }
            ]
          },
          {
            id: 'b2-p3',
            title: 'Paragraph 3 (Senate & Courts)',
            bullets: [
              { id: 'b2-7', text: 'Sulla packs Senate with 300 supporters to solidify oligarchic control.', citation: 'App. BC 1.100' },
              { id: 'b2-8', text: 'Courts transferred to senators → end of equestrian counterbalance.' },
              { id: 'b2-9', text: 'Senatorial monopoly fosters corruption and rivalry.' }
            ]
          },
          {
            id: 'b2-p4',
            title: 'Paragraph 4 (Long-term Effects)',
            bullets: [
              { id: 'b2-10', text: 'System becomes rigid and unresponsive.' },
              { id: 'b2-11', text: 'No legitimate way to channel grievances → fuels violence.' },
              { id: 'b2-12', text: 'Popularis leaders (Lepidus, Caesar) capitalize on discontent.' }
            ]
          },
          {
            id: 'b2-p5',
            title: 'Paragraph 5 (Mini Conclusion)',
            bullets: [
              { id: 'b2-13', text: 'Sulla weakened the checks-and-balances that allowed the Republic to function.' },
              { id: 'b2-14', text: 'Leads directly to the Caesar–Pompey crisis.' }
            ]
          }
        ]
      },
      {
        id: 'body-3',
        title: 'Argument 3: The Blueprint',
        description: 'Sulla as the model for future tyrants (30%).',
        blocks: [
          {
            id: 'b3-p1',
            title: 'Paragraph 1 (Overview)',
            bullets: [
              { id: 'b3-1', text: 'Sulla’s real legacy = model of how to seize power.' },
              { id: 'b3-2', text: 'Ancient writers consistently compare future leaders to him.' },
              { id: 'b3-3', text: 'Dictatorship becomes a viable political path.' }
            ]
          },
          {
            id: 'b3-p2',
            title: 'Paragraph 2 (Proscriptions as Template)',
            bullets: [
              { id: 'b3-4', text: 'Triumvirs (43 BCE) explicitly follow Sulla.' },
              { id: 'b3-5', text: 'They "revived the evil of Sulla."', isQuote: true, citation: 'Appian' },
              { id: 'b3-6', text: 'Legalized murder becomes a bipartisan tool.' },
              { id: 'b3-7', text: 'Property seizures create economic incentives for warlords.' }
            ]
          },
          {
            id: 'b3-p3',
            title: 'Paragraph 3 (Caesar Imitates Sulla)',
            bullets: [
              { id: 'b3-8', text: 'Caesar lived through Sulla’s rule and avoided being proscribed.' },
              { id: 'b3-9', text: 'Caesar fears prosecution → preemptive Rubicon crossing.', citation: 'App. BC 2.32' },
              { id: 'b3-10', text: 'Cicero asks: "Another Sulla?"', isQuote: true, citation: 'Ad Att. 9–10' },
              { id: 'b3-11', text: 'Caesar expands Senate and centralizes power, just like Sulla.' },
              { id: 'b3-12', text: 'Difference: Caesar does it more efficiently.' }
            ]
          },
          {
            id: 'b3-p4',
            title: 'Paragraph 4 (Pompey & Others)',
            bullets: [
              { id: 'b3-13', text: 'Pompey seeks extraordinary commands like Sulla.' },
              { id: 'b3-14', text: 'Uses veterans as a political base.' },
              { id: 'b3-15', text: 'Even Sulla’s enemies begin to use Sullanesque logic.' }
            ]
          },
          {
            id: 'b3-p5',
            title: 'Paragraph 5 (Augustus)',
            bullets: [
              { id: 'b3-16', text: 'Augustus completes Sulla’s arc.' },
              { id: 'b3-17', text: 'Sulla → Caesar → Augustus = direct ideological lineage.' },
              { id: 'b3-18', text: 'Sulla planted seeds of irreversible transformation.' }
            ]
          },
          {
            id: 'b3-p6',
            title: 'Paragraph 6 (Mini Conclusion)',
            bullets: [
              { id: 'b3-19', text: 'After Sulla, Republic no longer has political imagination to return to norms.' },
              { id: 'b3-20', text: 'Sulla\'s blueprint is copied for 50 years until the Republic ends.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bottom-triangle',
    type: 'conclusion',
    title: 'Conclusion',
    subtitle: 'Bottom Triangle (15%)',
    percentage: 15,
    iconName: 'triangle-inverted',
    colorTheme: 'slate',
    content: [
      {
        id: 'conc-1',
        title: '1. Counter & Rebuttal',
        description: 'Addressing the "Inevitable Collapse" theory.',
        blocks: [
          {
            id: 'c1-p1',
            title: 'Paragraph 1 (Counterargument)',
            bullets: [
              { id: 'c1-1', text: 'Some argue Republic was already doomed by inequality and corruption.' },
              { id: 'c1-2', text: 'Social War devastation also destabilized Rome.' },
              { id: 'c1-3', text: 'Marius also broke norms before Sulla.' }
            ]
          },
          {
            id: 'c1-p2',
            title: 'Paragraph 2 (Rebuttal)',
            bullets: [
              { id: 'c1-4', text: 'Structural issues ≠ inevitable collapse.' },
              { id: 'c1-5', text: 'Many societies survive corruption without civil war.' },
              { id: 'c1-6', text: 'Sulla weaponized the instability and destroyed remaining guardrails.' },
              { id: 'c1-7', text: 'Sulla demonstrated that armies decide politics.' }
            ]
          }
        ]
      },
      {
        id: 'conc-2',
        title: '2. Synthesis & Modern Parallel',
        description: 'Final thoughts and broader relevance.',
        blocks: [
          {
            id: 'c2-p3',
            title: 'Paragraph 3 (Synthesis)',
            bullets: [
              { id: 'c2-1', text: 'Sulla normalized violence, shattered institutions, and created a model for takeover.' },
              { id: 'c2-2', text: 'Modern Parallel: Democracies weaken when political actors abandon norms and militarize politics.' },
              { id: 'c2-3', text: 'When strongmen redefine rules through force, collapse becomes a chain reaction.' },
              { id: 'c2-4', text: 'Rome shows that one man at the wrong moment can push a fragile system beyond repair.', isQuote: true }
            ]
          }
        ]
      }
    ]
  }
];
