import { Text, View } from "@react-pdf/renderer";
import { ACCENT_COLOR } from "./styles";

const TitlePrimary = ({ children }) => (
  <Text
    style={{
      fontFamily: "Oswald",
      fontSize: 14,
      marginTop: 4,
    }}
  >
    {children}
  </Text>
);

const SectionText = ({ children }) => (
  <Text style={{ marginTop: 8, marginBottom: 4, fontSize: 10 }}>
    {children}
  </Text>
);

const TitleSecondary = ({ children, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: 9,
      marginTop: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      color: ACCENT_COLOR,
      ...style,
    }}
  >
    {children}
  </Text>
);

const Column2 = () => (
  <View
    style={{
      padding: 20,
      backgroundColor: "#dddddd",
      width: "30%",
      color: "black",
    }}
  >
    <TitlePrimary>Skills</TitlePrimary>
    <TitleSecondary>Languages</TitleSecondary>
    <SectionText>JavaScript, TypeScript, Python</SectionText>
    <TitleSecondary>Frontend Frameworks</TitleSecondary>
    <SectionText>React, Next.js, Svelte</SectionText>
    <TitleSecondary>Styling</TitleSecondary>
    <SectionText>
      SASS, Styled Components, Tailwind CSS, CSS Modules
    </SectionText>
    <TitleSecondary>Testing</TitleSecondary>
    <SectionText>
      Cypress, Jest, React Testing Library, Chromatic, Pytest
    </SectionText>
    <TitleSecondary>Rest / GraphQL API</TitleSecondary>
    <SectionText>Apollo Client, Axios, TanStack Query</SectionText>
    <TitleSecondary>FE Architecture</TitleSecondary>
    <SectionText>Micro Frontends, Webpack</SectionText>
    <TitleSecondary>Data Visualisation</TitleSecondary>
    <SectionText>
      D3, Plotly.js, Mapbox GL, Google Charts, Highcharts
    </SectionText>
    <TitleSecondary>React Libraries</TitleSecondary>
    <SectionText>
      Redux Toolkit, React PDF, React Spring, React Table, React Hook Form
    </SectionText>
    <TitleSecondary>Design Systems</TitleSecondary>
    <SectionText>Figma, Storybook</SectionText>
    <TitleSecondary>Integrations</TitleSecondary>
    <SectionText>Auth0 React SDK, Live Chats (SocialIntents)</SectionText>
    <TitleSecondary>Code Quality & A11y</TitleSecondary>
    <SectionText>
      EsLint, Stylelint, Prettier, CodeClimate, Lighthouse
    </SectionText>
    <TitleSecondary>Feature Flags & A/B Tests</TitleSecondary>
    <SectionText>LaunchDarkly, GrowthBook</SectionText>
    <TitleSecondary>Monitoring</TitleSecondary>
    <SectionText>Sentry, Google Analytics</SectionText>
    <TitleSecondary break style={{ marginTop: 24 }}>
      DevOps
    </TitleSecondary>
    <SectionText>Github Actions, Docker</SectionText>
    <TitleSecondary>Backend Development</TitleSecondary>
    <SectionText>Express, Nest.js, Prisma</SectionText>
    <TitleSecondary>Databases</TitleSecondary>
    <SectionText>Postgres, Redis, DynamoDB</SectionText>
    <TitleSecondary>AWS</TitleSecondary>
    <SectionText>S3, Lambda, API Gateway, Amplify, ECS, SQS</SectionText>

    <TitlePrimary>Education</TitlePrimary>
    <SectionText>
      Bachelor’s Degree in Economics, Belarusian State University, 2008-2013
    </SectionText>
  </View>
);

export default Column2;
