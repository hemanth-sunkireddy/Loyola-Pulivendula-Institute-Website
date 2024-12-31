import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("How to Reach us")}</Language>
              <Large to="tel:+91 9912342029">{t("Contact Number")}</Large>
              <Para>
                {t(`+91 9912342029, 08568 - 286309`)}
              </Para>
              <a href="mailto:loyolapoly.pulivendla@gmail.com">
                <Chat>{t(`Email Address`)}</Chat>
              </a>
              <Para>
                {t(`loyolapoly.pulivendla@gmail.com`)}
              </Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Quick Links")}</Title>
              <Large to="https://loyolapolytechnic.co.in/BROCHURE.pdf" target="_blank" rel="noopener noreferrer">
                {t("Institute Brochure")}
              </Large>
              {/* <Large to="/">{t("Software Principles")}</Large> */}
            </Col>
            {/* <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large to="/">{t("Support Center")}</Large>
              <Large to="/">{t("Customer Support")}</Large>
            </Col> */}
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Loyola Polytechnic College (YSRR),</Para>
              <Para>Pulivendla - 516390, YSR District,</Para>
              <Para>Andhra Pradesh, India.</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Developers")}</Title>
              <Para>
                {t(`Rev. Fr. K.Veeranjaneya Reddy`)}
              </Para>
              <Para>
                {t(`A. Siri`)}
              </Para>
              <Para>
                {t(`B.Pavithra`)}
              </Para>
              <Para>
                {t(`K.Lavanya`)}
              </Para>
              <Para>
                {t(`K.Sai Sree`)}
              </Para>
            </Col>
            {/* <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col> */}
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="256px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <p>copyright ⓒ 2024, Loyola Polytechnic, Pulivendula. All rights reserved.</p>
            </FooterContainer>
            {/* <FooterContainer>
              <p>Designed and Developed by Siri and her team.</p>
            </FooterContainer>
            <FooterContainer>
              <p>Last updated on Dec 2024 .</p>
            </FooterContainer> */}
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
