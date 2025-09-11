import { Link, Text, View } from "@react-pdf/renderer";
import ListItem from "./ListItem";
import Workplace from "./Workplace";
import Location from "./svg/Location";
import Phone from "./svg/Phone";
import Email from "./svg/Email";
import Linkedin from "./svg/Linkedin";
import Github from "./svg/Github";
import Portfolio from "./svg/Portfolio";

const Title = ({ children }) => (
  <Text
    style={{
      fontFamily: "Oswald",
      fontSize: 16,
      marginTop: 10,
    }}
  >
    {children}
  </Text>
);

const Column1 = () => (
  <View
    style={{
      margin: 16,
      paddingLeft: 8,
      paddingRight: 8,
      width: "70%",
      fontSize: 9,
    }}
  >
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 600, flexGrow: 1 }}>
        Tatiana Karamorina
      </Text>
      <Link href="https://www.tappiola.co.uk/">
        <Portfolio />
      </Link>
      <Link href="https://www.linkedin.com/in/tatiana-karamorina">
        <Linkedin />
      </Link>
      <Link href="https://github.com/tappiola">
        <Github />
      </Link>
    </View>
    <Text
      style={{
        fontSize: 12,
        marginTop: 2,
        marginLeft: 2,
        textTransform: "uppercase",
        marginRight: 6,
        color: "#505050",
        letterSpacing: 0.6,
      }}
    >
      Frontend Engineer
    </Text>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        gap: 4,
      }}
    >
      <Location />
      <Text style={{ marginRight: 9 }}>London, UK</Text>
      <Phone />
      <Text style={{ marginRight: 9 }}>+44 7507 625 808</Text>
      <Email />
      <Link
        style={{ color: "black", textDecoration: "none" }}
        href="mailto:t.karamorina@gmail.com"
      >
        t.karamorina@gmail.com
      </Link>
    </View>
    <Title>Profile</Title>
    <Text style={{ marginTop: 6 }}>
      Frontend Engineer proficient in React and TypeScript. With background in
      QA, she brings a strong technical background and ability to anticipate
      potential issues during development, ensuring delivery of high-quality,
      visually polished products.
    </Text>
    <Text style={{ marginTop: 6 }}>
      She thrives in fast-paced environments, where priorities shift quickly and
      collaboration is essential. Adaptable and proactive, Tatiana readily takes
      on diverse responsibilities with the goal of moving projects forward
      efficiently.
    </Text>
    <Title>Employment History</Title>
    <View style={{ marginTop: 4 }}>
      <Workplace
        title="Frontend Engineer, Santander"
        location="London, UK"
        dates="April 2024 — May 2025"
      />
      <Text style={{ marginTop: 8 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> multi-tenant platform
        supporting the end-to-end lifecycle of vehicle leasing
      </Text>
      <Text
        style={{
          marginBottom: 6,
          marginTop: 6,
        }}
      >
        <Text style={{ fontWeight: 600 }}>Tech stack:</Text> React, TypeScript,
        React Hook Form, Tailwind CSS, TanStack Query, Turborepo, i18next,
        Vitest, Storybook, Github Actions, AWS
      </Text>
      <ListItem>
        Worked closely with stakeholders to translate high-level ideas into
        clear requirements
      </ListItem>
      <ListItem>
        Developed new features and reworked existing ones, coordinating with
        multiple teams to deliver complex initiatives across multiple markets
      </ListItem>
      <ListItem>
        Enhanced internal tooling and design system, addressing existing gaps
        and moving UX toward greater consistency
      </ListItem>
      <ListItem>
        Refactored legacy code, replacing outdated implementations with modern
        solutions, thereby reducing technical debt and improving maintainability
      </ListItem>
      <ListItem>
        Ensured application compliance with EAA, automated A11y checks
      </ListItem>
      <ListItem>
        Encouraged adoption of better QA practices, contributing to fewer
        incident reports
      </ListItem>
      <ListItem>
        Investigated and resolved production incidents, addressing alerts and
        bug reports
      </ListItem>
      <ListItem>
        Improved observability by implementing Datadog dashboards and alerts,
        enabling faster issue detection and resolution
      </ListItem>
      <ListItem>
        Optimized CI pipeline, resulting in better DX and quicker delivery of
        features
      </ListItem>
    </View>

    <View style={{ marginTop: 4 }}>
      <Workplace
        title="Frontend Engineer, Util"
        location="London, UK"
        dates="August 2022 — January 2024"
      />
      <Text style={{ marginTop: 8 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> application focused on
        evaluating the ESG impact of companies through the lens of the UN SDGs
      </Text>
      <Text
        style={{
          marginBottom: 6,
          marginTop: 6,
        }}
      >
        <Text style={{ fontWeight: 600 }}>Tech stack:</Text> React, TypeScript,
        Redux, SASS, GraphQL, Apollo Client, MFEs, Cypress, Storybook,
        Chromatic, LaunchDarkly, Auth0, d3, plotly.js, Github Actions, AWS
      </Text>
      <ListItem>
        Performed the full cycle of application development, from setting up
        microfrontend architecture, establishing CI processes and testing
        strategy to first app release
      </ListItem>
      <ListItem>
        Implemented new features with focus on visualising complex datasets
      </ListItem>
      <ListItem>
        Created custom charts to enhance UX by simplifying comprehension of
        complex datasets
      </ListItem>
      <ListItem>
        Ensured application quality and compliance to accessibility standards
      </ListItem>
      <ListItem>
        Led design and development of mobile version of the app
      </ListItem>
      <ListItem>
        Contributed to flawless production operations through well organised
        release process, application monitoring, and feature flags utilisation
      </ListItem>
      <ListItem>
        Actively participated in feature design sessions to drive project
        success
      </ListItem>
      <ListItem>
        Developed a custom UI library, enhancing developer productivity and code
        reuse
      </ListItem>
    </View>
    <View break style={{ marginTop: 24 }}>
      <Workplace
        title="Frontend Engineer, Ondat"
        location="London, UK"
        dates="JUNE 2022 — JULY 2022"
      />
      <Text style={{ marginTop: 8 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> portal for monitoring
        and configuring Kubernetes clusters
      </Text>
      <Text
        style={{
          marginBottom: 6,
          marginTop: 6,
        }}
      >
        <Text style={{ fontWeight: 600 }}>Tech stack:</Text> React, TypeScript,
        GraphQL, React Query, React Hook Form, Styled Components, Jest, React
        Testing Library, Storybook, Nest.js, Prisma, Docker
      </Text>
      <ListItem>
        Implemented new features according to Figma designs using React
      </ListItem>
      <ListItem>
        Added responsive design to core pages, promoted adoption of a
        mobile-first approach
      </ListItem>
      <ListItem>
        Actively participated in requirement definition and feature design
      </ListItem>
      <ListItem>
        Committed efforts to enhance code quality, resulting in improved code
        structure, better readability and 15% increase in test coverage
      </ListItem>
      <ListItem>
        Refactored existing legacy code and improved architecture of multiple
        components
      </ListItem>
    </View>
    <View style={{ marginTop: 8 }}>
      <Workplace
        title="Frontend Engineer, Scandiweb"
        location="Riga, Latvia"
        dates="FEBRUARY 2021 — JANUARY 2022"
      />
      <Text style={{ marginTop: 8 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> complex highly
        customizable e-commerce solution
      </Text>
      <Text
        style={{
          marginBottom: 6,
          marginTop: 6,
        }}
      >
        <Text style={{ fontWeight: 600 }}>Tech stack:</Text> React, Redux, SASS,
        GraphQL, Magento, PWA
      </Text>
      <ListItem>
        Developed complex UI components with custom animations using React
      </ListItem>
      <ListItem>
        Redesigned the whole website according to new Figma designs
      </ListItem>
      <ListItem>Added RTL support to components</ListItem>
      <ListItem>
        Increased lighthouse scores to 90%+, improved SEO by adjusting SSR logic
      </ListItem>
      <ListItem>
        Added new GraphQL endpoints, implemented backend logic changes
      </ListItem>
      <ListItem>
        Enhanced application quality through bug fixes, A11y, and performance
        optimizations
      </ListItem>
      <ListItem>
        Added multiple custom ESLint rules and StyleLint to improve code quality
      </ListItem>
    </View>
    <View style={{ marginTop: 8 }}>
      <Workplace
        title="Software Developer in Test, Easybrain"
        location="Minsk, Belarus"
        dates="DECEMBER 2018 — AUGUST 2020"
      />
      <Text style={{ marginTop: 8, marginBottom: 6 }}>
        <Text style={{ fontWeight: 600, marginBottom: 6 }}>Project:</Text> big
        data application, focusing on marketing and financial data analysis
      </Text>
      <ListItem>
        Helped to increase stability of ETL processes and improve data quality,
        which contributed to better financial outcomes of multiple mobile apps
      </ListItem>
      <ListItem>
        Introduced test automation on the project, thereby optimizing efficiency
        of engineering work and reducing manual efforts
      </ListItem>
      <ListItem>
        Helped to formalize the development flow, enabling faster delivery with
        fewer defects
      </ListItem>
    </View>
    <View style={{ marginTop: 8 }}>
      <Workplace
        title="Software Developer in Test / QA Engineer, Wargaming.net"
        location="Minsk, Belarus"
        dates="NOVEMBER 2017 — OCTOBER 2018"
      />
      <Text style={{ marginTop: 8, marginBottom: 6 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> e-commerce web
        application for World of Tanks game client
      </Text>
      <ListItem>
        Built efficient testing process on a greenfield project balancing
        efforts between manual, integration and E2E tests (pytest)
      </ListItem>
      <ListItem>
        Successfully performed the initial release of the app to production
      </ListItem>
      <ListItem>
        Improved efficiency of testing by using Docker and integrating automated
        tests into CI
      </ListItem>
    </View>
    <View style={{ marginTop: 8 }}>
      <Workplace
        title="QA Engineer, A1QA"
        location="Minsk, Belarus"
        dates="JULY 2012 – OCTOBER 2017"
      />
      <Text style={{ marginTop: 8, marginBottom: 6 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> multiple projects
        across diverse domains (risk management, online gaming, etc.)
      </Text>
      <ListItem>
        Ensured the quality of mobile and web applications through functional
        and performance testing
      </ListItem>
      <ListItem>
        Created automated Python tests, reducing time to identify software
        issues
      </ListItem>
    </View>
  </View>
);

export default Column1;
