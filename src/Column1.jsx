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
      QA Engineer
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
      QA Engineer with a solid development background, able to establish testing
      processes from scratch, integrate QA into CI/CD pipelines, and ensure
      teams deliver products of high quality. Adaptable and proactive, she
      thrives in fast-paced environments, where priorities shift quickly and
      collaboration is essential.
    </Text>
    <Title>Employment History</Title>
    <View style={{ marginTop: 4 }}>
      <Workplace
        title="Frontend Engineer, Santander"
        location="London, UK"
        dates="April 2024 — May 2025"
      />
      <Text style={{ marginTop: 8, marginBottom: 6 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> multi-tenant platform
        supporting the end-to-end lifecycle of vehicle leasing
      </Text>
      <ListItem>
        Developed features in React and TypeScript with a strong focus on
        testing and reliability
      </ListItem>
      <ListItem>
        Ensured application quality through unit (Vitest) and integration
        testing (Storybook)
      </ListItem>
      <ListItem>
        Improved test automation quality by reducing mock usage, increasing test
        coverage, and fixing flaky tests
      </ListItem>
      <ListItem>
        Implemented E2E tests with Playwright to ensure stability of critical
        user journeys
      </ListItem>
      <ListItem>Enhanced internal testing tooling</ListItem>
      <ListItem>
        Performed manual smoke and regression testing of complex user flows
      </ListItem>
      <ListItem>
        Ensured application compliance with EAA, automated A11y checks
      </ListItem>
      <ListItem>
        Promoted adoption of stronger QA practices, contributing to fewer
        incident reports
      </ListItem>
      <ListItem>
        Planned and performed production releases, using feature flags to toggle
        features safely
      </ListItem>
      <ListItem>
        Enabled faster issue detection by implementing Datadog dashboards and
        alerts
      </ListItem>
      <ListItem>Improved reporting of test results in CI/CD pipeline</ListItem>
    </View>

    <View style={{ marginTop: 4 }}>
      <Workplace
        title="Frontend Engineer, Util"
        location="London, UK"
        dates="August 2022 — January 2024"
      />
      <Text style={{ marginTop: 8, marginBottom: 6 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> application focused on
        evaluating the ESG impact of companies through the lens of the UN SDGs
      </Text>
      <ListItem>
        Set up architecture of a greenfield project using React, TypeScript and
        micro-frontends
      </ListItem>
      <ListItem>
        Defined testing strategy from scratch, balancing automation and manual
        testing
      </ListItem>
      <ListItem>
        Configured a CI/CD pipeline with GitHub Actions for quality checks,
        branch previews, and automated deployments to AWS
      </ListItem>
      <ListItem>
        Set up unit, integration, and end-to-end testing with Cypress, handling
        complexities of a micro-frontend architecture and authentication flows
      </ListItem>
      <ListItem>
        Integrated Chromatic for automated visual regression testing to catch
        unintended UI changes
      </ListItem>
      <ListItem>
        Introduced manual pre-release testing with a structured TestRail suite
        to validate key flows before release
      </ListItem>
      <ListItem>
        Ensured application compliance to accessibility standards
      </ListItem>
      <ListItem>
        Supported flawless production operations through well organised release
        process, application monitoring, and feature flags utilisation
      </ListItem>
    </View>
    <View break style={{ marginTop: 24 }}>
      <Workplace
        title="Frontend Engineer, Ondat"
        location="London, UK"
        dates="JUNE 2022 — JULY 2022"
      />
      <Text style={{ marginTop: 8, marginBottom: 6 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> portal for monitoring
        and configuring Kubernetes clusters
      </Text>
      <ListItem>
        Implemented new features with focus on quality, which helped to increase
        in test coverage by 15%
      </ListItem>
      <ListItem>
        Optimised usage of mocks in tests, reducing the need to provision
        Kubernetes clusters for testing
      </ListItem>
    </View>
    <View style={{ marginTop: 8 }}>
      <Workplace
        title="Frontend Engineer, Scandiweb"
        location="Riga, Latvia"
        dates="FEBRUARY 2021 — JANUARY 2022"
      />
      <Text style={{ marginTop: 8, marginBottom: 6 }}>
        <Text style={{ fontWeight: 600 }}>Project:</Text> complex highly
        customizable e-commerce solution
      </Text>
      <ListItem>
        Designed and developed complex React components with special attention
        to UX and cross-browser compatibility
      </ListItem>
      <ListItem>
        Provisioned test environments and tuned product configurations to ensure
        comprehensive coverage of use cases
      </ListItem>
      <ListItem>
        Enhanced application quality through bug fixes, A11y, and performance
        optimizations
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
        Introduced test automation on the project using python and pytest,
        thereby optimizing efficiency of engineering work and reducing manual
        efforts
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
        across diverse domains (risk management, online gaming, etc.)
      </Text>
      <ListItem>
        Ensured the quality of mobile and web applications through functional,
        regression and performance testing across multiple browsers and devices
      </ListItem>
      <ListItem>
        Automated tests using Python and Selenium WebDriver, reducing time to
        identify software issues
      </ListItem>
      <ListItem>
        Conducted accessibility testing to ensure compliance with accessibility
        standards and enhance user experience
      </ListItem>
    </View>
  </View>
);

export default Column1;
