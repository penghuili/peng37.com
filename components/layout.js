import Head from "next/head";

import AppContainer from "../shared/react-pure/AppContainer";
import ContentWrapper from "../shared/react-pure/ContentWrapper";
import createTheme from "../shared/react-pure/createTheme";
import Divider from "../shared/react-pure/Divider";
import Spacer from "../shared/react-pure/Spacer";
import NextLink from "./NextLink";
import { useRouter } from "next/router";
import { LinkPrevious } from "grommet-icons";

export const siteTitle = "peng37.com";

const theme = createTheme("#D2356E");
const defaultTitle = "peng37.com - Creator of Watcher37, Link37, Often37, Friend37, Encrypt37";
const avatarImage = "https://peng37.com/images/android-icon-192x192.png";

export default function Layout({
  children,
  hasBack,
  backPath = "/",
  title,
  description,
  ogType,
  ogImage,
  footer,
}) {
  const router = useRouter();

  return (
    <AppContainer theme={theme} themeMode="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultTitle} />

        <meta property="og:type" content={ogType || "website"} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultTitle} />
        <meta property="og:image" content={ogImage || avatarImage} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@penghuili22" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta
          name="twitter:description"
          content={description || defaultTitle}
        />
        <meta name="twitter:image" content={ogImage || avatarImage} />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </Head>

      <ContentWrapper>
        {hasBack && (
          <>
            <Spacer />
            <NextLink href={backPath}>
              <LinkPrevious />
            </NextLink>
            <Spacer />
          </>
        )}

        {children}

        <Spacer size="3rem" />
        <Divider />
        <Spacer />
        {footer ? (
          footer
        ) : (
          <footer>
            {router.pathname !== "/" && (
              <NextLink href="/" margin="0 1rem 0 0">
                Home
              </NextLink>
            )}
            <NextLink href="/blog" margin="0 1rem 0 0">
              Blog
            </NextLink>
            <NextLink href="/contact" margin="0 1rem 0 0">
              Contact
            </NextLink>
            <NextLink
              href="https://www.buymeacoffee.com/peng37"
              target="_blank"
            >
              Buy me a coffee
            </NextLink>
          </footer>
        )}
      </ContentWrapper>
    </AppContainer>
  );
}
