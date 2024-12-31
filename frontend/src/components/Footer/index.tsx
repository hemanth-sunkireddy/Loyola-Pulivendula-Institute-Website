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
  return (
    <>
      {/* Center the iframe and make it responsive */}
      <div className="flex justify-center items-center mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1932.1100172996794!2d78.23403413867261!3d14.41447559651252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3ebb21087d297%3A0xe2158153b9bd06f2!2sLoyola%20Polytechnic%20College%2C%20Pulivendula%2C%20Andhra%20Pradesh%20516390!5e0!3m2!1sen!2sin!4v1735667189886!5m2!1sen!2sin"
          className="w-full sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-2/3 h-64 sm:h-auto md:h-64 lg:h-72 xl:h-80"
          loading="lazy"
        ></iframe>
      </div>

      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("How to Reach us")}</Language>
              <Large to="tel:+91 9912342029">{t("Contact Number")}</Large>
              <Para>{t(`+91 9912342029, 08568 - 286309`)}</Para>
              <a href="mailto:loyolapoly.pulivendla@gmail.com">
                <Chat>{t(`Email Address`)}</Chat>
              </a>
              <Para>{t(`loyolapoly.pulivendla@gmail.com`)}</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Quick Links")}</Title>
              <Large to="https://loyolapolytechnic.co.in/BROCHURE.pdf" target="_blank" rel="noopener noreferrer">
                {t("Institute Brochure")}
              </Large>
            </Col>
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
              <Para>{t(`Sir K.Veeranjaneya Reddy`)}</Para>
              <Para>{t(`A. Siri`)}</Para>
              <Para>{t(`B.Pavithra`)}</Para>
              <Para>{t(`K.Lavanya`)}</Para>
              <Para>{t(`K.Sai Sree`)}</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>

      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon src="logo.png" aria-label="homepage" width="256px" height="64px" />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <p>copyright ⓒ 2024, Loyola Polytechnic, Pulivendula. All rights reserved.</p>
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
