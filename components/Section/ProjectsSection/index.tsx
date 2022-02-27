import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { PrimaryButton } from '../../../styles/shared/layout/Button';
import { githubProfile } from '../../../utils/constants';
import SectionContainer from '../styles';
import {
  ProjectsContainer,
  SectionIntro,
  ProjectDescription,
  Homepage,
  GithubLink,
  LinksContainer,
  TitleContainer,
  ProjectTitle,
  ProjectListItem,
  ProjectsList,
  SectionAlt,
  SectionTitle,
  ShowMore,
  LangToolsAndLibContainer,
  LangToolsAndLibItem,
  Lower,
} from './styles';

import * as projectsData from '../../../data/projects.json';

const ProjectsSection = () => {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    delay: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  }, [animation, inView]);

  const container = {
    hidden: { opacity: 0, translateY: 15 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25,
      },
    },
  };

  const MAX_RENDERED_PROJECTS = 6;
  const [showMore, setShowMore] = useState(false);
  const [projects] = useState((projectsData as any).default);
  const [projectsList, setProjectsList] = useState(
    projects.slice(0, MAX_RENDERED_PROJECTS),
  );

  useEffect(() => {
    if (showMore) setProjectsList(projects);
    else setProjectsList(projects.slice(0, MAX_RENDERED_PROJECTS));
  }, [showMore]);

  const showMoreToggle = () => {
    setShowMore((prevState) => !prevState);
  };

  const listItem = {
    hidden: { opacity: 0, translateY: 15 },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };

  const formatTitle = (str: string) => {
    const newStrArr = Array.from(str);
    const delimiter = ['-', '_'];
    for (let i = 0; i < str.length; i += 1) {
      for (let j = 0; j < delimiter.length; j += 1) {
        if (str[i] === delimiter[j]) newStrArr[i] = ' ';
        break;
      }
    }

    let newStr: String = newStrArr[0];
    for (let i = 1; i < str.length; i += 1) {
      if (newStrArr[i] >= 'A' && newStrArr[i] <= 'Z') {
        if (newStrArr[i - 1] >= 'a' && newStrArr[i - 1] <= 'z') {
          newStr += ' ';
        }
      }
      newStr += newStrArr[i];
    }

    return newStr;
  };

  return (
    <SectionContainer id="projects">
      <ProjectsContainer
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animation}
      >
        <SectionIntro>
          <SectionTitle variants={listItem}>
            <a href="#projects">Projects</a>
          </SectionTitle>
          <SectionAlt
            variants={listItem}
            href={`${githubProfile}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Github
          </SectionAlt>
        </SectionIntro>

        <ProjectsList>
          <AnimatePresence>
            {projectsList.map((project, idx) => (
              <ProjectListItem
                key={idx}
                variants={listItem}
                initial={listItem.hidden}
                animate={listItem.visible}
                exit={listItem.hidden}
              >
                <ProjectTitle>
                  <TitleContainer>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {formatTitle(project.name)}
                    </a>
                  </TitleContainer>

                  <LinksContainer>
                    <GithubLink
                      variants={listItem}
                      initial={listItem.hidden}
                      animate={listItem.visible}
                      exit={listItem.hidden}
                    >
                      <motion.a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </motion.a>
                    </GithubLink>
                    {project.homepage !== '' && project.homepage !== null ? (
                      <Homepage
                        variants={listItem}
                        initial={listItem.hidden}
                        animate={listItem.visible}
                        exit={listItem.hidden}
                      >
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                      </Homepage>
                    ) : null}
                  </LinksContainer>
                </ProjectTitle>
                <Lower>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <LangToolsAndLibContainer>
                    {project.technologies_and_tools.map((item, id) => (
                      <LangToolsAndLibItem key={id}>{item}</LangToolsAndLibItem>
                    ))}
                  </LangToolsAndLibContainer>
                </Lower>
              </ProjectListItem>
            ))}
          </AnimatePresence>
        </ProjectsList>

        <ShowMore>
          <PrimaryButton onClick={showMoreToggle} variants={listItem}>
            Show {showMore ? 'Less' : 'More'}
          </PrimaryButton>
        </ShowMore>
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default ProjectsSection;
