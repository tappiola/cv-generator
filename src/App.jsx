import { PDFViewer, Page, Document, Font } from "@react-pdf/renderer";
import Column1 from "./Column1";
import Column2 from "./Column2";
import OpenBold from "./fonts/OpenSans-Bold.ttf";
import OpenSemiBold from "./fonts/OpenSans-SemiBold.ttf";

Font.register({
  family: "Open Sans",
  fontWeight: 400,
  src: "https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf",
});

Font.register({
  family: "Open Sans",
  fontWeight: "bold",
  src: OpenBold,
});

Font.register({
  family: "Open Sans",
  fontWeight: 600,
  src: OpenSemiBold,
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

Font.registerHyphenationCallback((word) => [word]);

const App = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <PDFViewer width="100%" height="100%">
      <Document
        title="CV - Tatiana Karamorina - Frontend Developer"
        author="Tatiana Karamorina"
        subject="Experienced Frontend Developer proficient Expertise in React and TypeScript"
        keywords="CV Frontend Developer Engineer JavaScript React Redux CSS Tailwind TypeScript Cypress D3 Microfrontends Next.js Svelte GraphQL London UK"
      >
        <Page
          size="A4"
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            fontFamily: "Open Sans",
            fontSize: 12,
          }}
        >
          <Column1 />
          <Column2 />
        </Page>
      </Document>
    </PDFViewer>
  </div>
);

export default App;
