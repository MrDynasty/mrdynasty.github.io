import {
  BellIcon,
  ChairIcon,
  DownloadIcon,
  SeatedIcon,
  ShieldIcon,
  SpeakerIcon,
  StandingIcon,
} from './components/icons'

export const contactEmail = 'pepermao94@gmail.com'
export const supportMailto = `mailto:${contactEmail}?subject=Seven%20Gentle%20support`

export const steps = [
  {
    title: 'Tell us about you',
    body: 'Five short questions: your age range, how active you are, what you would like to work on, how you like to move, and how many days a week you want to practise.',
  },
  {
    title: 'See your plan first',
    body: 'We match you with a seven-minute course for your support style. Your plan is shown in full before any membership is offered.',
  },
  {
    title: 'Follow along for seven minutes',
    body: 'Start from the home screen, follow the video, and pause whenever you need to. A sturdy chair is the only equipment.',
  },
  {
    title: 'Say how it felt',
    body: 'After each session, tell us whether it felt too easy, just right, or too difficult. Your answer is saved with the session so you can review it in View progress.',
  },
]

export const supportPaths = [
  {
    title: 'Standing without support',
    body: 'For days when you feel steady on your feet. The whole session is done standing, with no chair needed.',
    Icon: StandingIcon,
  },
  {
    title: 'Standing with a chair',
    body: 'Keep one hand on a sturdy chair for balance throughout the session.',
    Icon: ChairIcon,
  },
  {
    title: 'Seated',
    body: 'Every movement is done from a chair, with no standing required.',
    Icon: SeatedIcon,
  },
]

export const features = [
  {
    title: 'No account, no cloud',
    body: 'Your answers, plan, and history stay on your iPhone. There is nothing to sign in to.',
    Icon: ShieldIcon,
  },
  {
    title: 'One sturdy chair',
    body: 'No gym, no equipment, no special clothes. Just a little space and a chair if you need one.',
    Icon: ChairIcon,
  },
  {
    title: 'Works offline',
    body: 'The workout videos are included with the app, so a session does not need a connection.',
    Icon: DownloadIcon,
  },
  {
    title: 'Easier to read',
    body: 'Larger text, higher contrast, and roomy buttons are built in — and you can adjust text size and contrast in the app.',
    iconText: 'Aa',
  },
  {
    title: 'Spoken cues',
    body: 'Turn on spoken cues if you would rather hear what to do than read it.',
    Icon: SpeakerIcon,
  },
  {
    title: 'Optional reminders',
    body: 'Choose the days and times that suit you. Reminders are local notifications and can be turned off at any time.',
    Icon: BellIcon,
  },
]

export const homeFaqs = [
  {
    question: 'Do I need any equipment?',
    answer: (
      <p>
        One sturdy chair is enough, and only if your plan uses standing with
        support or seated movements. There is no gym, no mat, and no special
        clothing.
      </p>
    ),
  },
  {
    question: 'How long is each workout?',
    answer: (
      <p>
        Seven minutes. You can pause at any point and pick up where you left
        off.
      </p>
    ),
  },
  {
    question: 'Is Seven Gentle free?',
    answer: (
      <p>
        Yes. A free course is available without a membership. An optional monthly
        or yearly subscription unlocks the full course library; prices are shown
        in the app before you buy.
      </p>
    ),
  },
  {
    question: 'Can I use Seven Gentle offline?',
    answer: (
      <p>
        Yes. The workout videos are included with the app, so you can practise
        without an internet connection. The App Store needs a connection to buy
        or restore a membership.
      </p>
    ),
  },
  {
    question: 'Can I change my plan later?',
    answer: (
      <p>
        Yes. You can change how many days a week you practise from your profile.
        If your support needs change, finish a workout and choose{' '}
        <strong>Change support needs</strong> on the summary screen.
      </p>
    ),
  },
  {
    question: 'Is Seven Gentle medical treatment?',
    answer: (
      <p>
        No. It is a general wellbeing and movement app, not a medical device,
        and it does not replace advice from your doctor or another health
        professional.
      </p>
    ),
  },
]

export const supportFaqs = [
  {
    question: 'How do I cancel my subscription?',
    answer: (
      <>
        <p>
          Subscriptions are managed by Apple, not by Seven Gentle. Open your
          iPhone <strong>Settings</strong>, tap your name, then{' '}
          <strong>Subscriptions</strong>, and choose Seven Gentle. You can also
          open <strong>Your Subscription</strong> in the app and use the App
          Store management screen.
        </p>
        <p>Deleting the app does not cancel a subscription.</p>
      </>
    ),
  },
  {
    question: 'I was charged, but the app does not show my membership.',
    answer: (
      <>
        <p>
          Make sure you are signed in to the same Apple Account you used to
          subscribe, then choose <strong>Restore purchases</strong>. You can
          find it in the app&apos;s settings and on the membership screen.
        </p>
        <p>
          If the membership still does not appear, contact Apple Support — they
          handle billing and can check the purchase on your account.
        </p>
      </>
    ),
  },
  {
    question: 'Can I restore my history on a new iPhone?',
    answer: (
      <p>
        No. Seven Gentle has no account and no cloud sync, so practice history
        stays on the iPhone where it was recorded. A device backup made with
        Apple&apos;s backup tools may include it, but we cannot restore it for
        you.
      </p>
    ),
  },
  {
    question: 'The workout video will not play.',
    answer: (
      <>
        <p>
          Close the app completely and open it again, then try starting the
          workout once more. If it still does not play, restart your iPhone.
        </p>
        <p>
          If the problem continues, email us with your iPhone model and iOS
          version so we can look into it.
        </p>
      </>
    ),
  },
  {
    question: 'How do I delete my data?',
    answer: (
      <p>
        Delete the Seven Gentle app from your iPhone. Its questionnaire answers,
        plan, history, reminders, and accessibility settings are removed with it.
        There is no server copy for us to delete.
      </p>
    ),
  },
  {
    question: 'How do I make the text larger?',
    answer: (
      <p>
        Open <strong>Accessibility</strong> in the app and choose a larger text
        size. You can also turn on higher contrast and spoken cues there. For
        even larger text across iOS, use{' '}
        <strong>Settings &gt; Display &amp; Brightness &gt; Text Size</strong>.
      </p>
    ),
  },
  {
    question: 'Can I use Seven Gentle on iPad?',
    answer: (
      <p>
        Seven Gentle is designed for iPhone. It may run on an iPad in iPhone
        compatibility mode, but the layout has not been designed or tested for
        iPad screens.
      </p>
    ),
  },
  {
    question: 'Do I need an internet connection?',
    answer: (
      <p>
        You can complete a workout without a connection because the videos are
        included with the app. You do need a connection to buy, restore, or
        manage a membership through the App Store.
      </p>
    ),
  },
]
