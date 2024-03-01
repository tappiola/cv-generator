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
      fontSize: 10,
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
        fontSize: 13,
        marginTop: 2,
        textTransform: "uppercase",
        marginRight: 6,
        color: "#505050",
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
        href="mailto:karamorina@gmail.com"
      >
        karamorina@gmail.com
      </Link>
    </View>
    <Title>Profile</Title>
    <Text style={{ marginTop: 6 }}>
      Tatiana is a frontend developer proficient in React and TypeScript.
      Leveraging 8 years of prior experience in QA, she brings an extensive
      technical background and ability to predict potential issues during
      development, ensuring that the products adhere to the highest standards of
      quality.
    </Text>
    <Text style={{ marginTop: 6 }}>
      Quick learner with a keen eye for visual perfection. Thrives in rapidly
      changing start-up environments and willingly undertakes a broad spectrum
      of tasks.
    </Text>
    <Title>Employment History</Title>
    <View style={{ marginTop: 4 }}>
      <Workplace
        title="Frontend Developer, Util"
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
        Redux, SASS, GraphQL, Apollo Client, Module Federation, Cypress,
        Storybook, Chromatic, LaunchDarkly, Auth0, d3, plotly.js, Github
        Actions, AWS
      </Text>
      <ListItem>
        Performed the full cycle of application development, from setting up
        microfrontend architecture, establishing CI processes and effective
        testing strategy to first app release to production
      </ListItem>
      <ListItem>
        Implemented new features with focus on visualising complex datasets
      </ListItem>
      <ListItem>
        Created custom charts to enhance UX by simplifying comprehension of
        intricate data
      </ListItem>
      <ListItem>
        Ensured application quality and compliance to accessibility standards
      </ListItem>
      <ListItem>
        Spearheaded design and development of mobile version of the app
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
        Developed a custom UI library, significantly enhancing developer
        productivity and fostering code reuse
      </ListItem>
    </View>

    <View style={{ marginTop: 8 }}>
      <Workplace
        title="Frontend Developer, Ondat"
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
        Added responsive design support to core pages, encouraged the team to
        adopt mobile-first approach
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
        components (rewrote modals, improved usage of React Router and hooks)
      </ListItem>
    </View>

    <View break style={{ marginTop: 24 }}>
      <Workplace
        title="Frontend Developer, Scandiweb "
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
        Enhanced application quality by addressing bugs, bolstering
        accessibility and performance
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
        which contributed to improved financial outcomes of multiple mobile apps
      </ListItem>
      <ListItem>
        Introduced test automation on the project using python and pytest,
        thereby optimizing efficiency of engineering work and reducing manual
        efforts
      </ListItem>
      <ListItem>
        Played an important role in formalizing the development flow, which
        resulted in quicker features delivery and fewer bugs in production
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
        Successfully performed the initial release of the app to production.
        Optimized efficiency of release process by integrating automated tests
        into CI (TeamCity)
      </ListItem>
      <ListItem>
        Contributed to efficient testing by usage of mocks and running tests in
        Docker
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
        across diverse domains (risk management, online gaming,
        telecommunications, etc.)
      </Text>
      <ListItem>
        Ensured the quality of mobile and web applications through functional,
        regression and performance testing across multiple browsers and devices
      </ListItem>
      <ListItem>
        Automated tests using Python and Selenium WebDriver, streamlining
        testing processes and improving efficiency in detecting and addressing
        software defects
      </ListItem>
      <ListItem>
        Conducted accessibility testing to ensure compliance with accessibility
        standards and enhance user experience
      </ListItem>
    </View>
  </View>
);

export default Column1;
