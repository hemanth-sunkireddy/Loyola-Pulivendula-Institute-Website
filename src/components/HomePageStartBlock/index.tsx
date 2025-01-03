import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { HomePageStartBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  IframeStyle
} from "./styles";
import { useNavigate } from "react-router-dom";

const HomePageStartBlock = ({
  videourl,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: HomePageStartBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const navigation = useNavigate();
  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="center"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={12} md={12} sm={12} xs={24} style={{ paddingLeft: '10%', paddingRight: '1%' }}>
          <IframeStyle
              src="https://www.youtube.com/embed/fFXliHpgBiU?si=DZEVfNHegdz-Wbdm&amp;start=98"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          title: string;
                          color?: string;
                          url: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => navigation(item.url)}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              {/* <video width="100%">
                                <source
                                  src="https://www.youtube.com/watch?v=mwVWIJHGWGU"
                                  type="video/mp4"
                                />
                              </video> */}
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(HomePageStartBlock);
