import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaCar,
  FaUmbrellaBeach,
  FaPencilAlt,
  FaBriefcase,
  FaRunning
} from 'react-icons/fa';
import {
  GiPartyPopper,
  GiCoffeeCup,
} from 'react-icons/gi';

import { Projects } from '../Projects';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === 'inbox' ? 'active' : undefined}
        >
          <div
            data-testid="inbox-action"
            aria-label="Show inbox tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('inbox');
              setSelectedProject('INBOX');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('inbox');
                setSelectedProject('INBOX');
              }
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          data-testid="month"
          className={active === 'month' ? 'active' : undefined}
        >
          <div
            data-testid="month-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('month');
              setSelectedProject('MONTH');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('month');
                setSelectedProject('MONTH');
              }
            }}
          >
            <span>
              <FaRegCalendarAlt/>
            </span>

            <span>Month</span>
          </div>
        </li>
        <li
          data-testid="Sunday"
          className={active === 'Sunday' ? 'active' : undefined}
        >
          <div
            data-testid="Sunday-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('Sunday');
              setSelectedProject('SUN');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('Sunday');
                setSelectedProject('SUN');
              }
            }}
          >

            <span><GiCoffeeCup/>⠀#Sunday</span>
          </div>
        </li>
        <li
          data-testid="Monday"
          className={active === 'Monday' ? 'active' : undefined}
        >
          <div
            data-testid="Monday"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('Monday');
              setSelectedProject('MON');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('Monday');
                setSelectedProject('MON');
              }
            }}
          >
            <span><FaBriefcase/>⠀#Monday</span>
          </div>
        </li>
        <li
          data-testid="Tuesday"
          className={active === 'Tuesday' ? 'active' : undefined}
        >
          <div
            data-testid="Tuesday-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('Tuesday');
              setSelectedProject('TUE');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('Tuesday');
                setSelectedProject('TUE');
              }
            }}
          >
            <span><FaPencilAlt/>⠀#Tuesday</span>
          </div>
        </li>
        <li
          data-testid="Wednesday"
          className={active === 'Wednesday' ? 'active' : undefined}
        >
          <div
            data-testid="Wednesday"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('Wednesday');
              setSelectedProject('WED');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('Wednesday');
                setSelectedProject('WED');
              }
            }}
          >
            <span>
            <FaRunning/>⠀#Wednesday</span>
          </div>
        </li>
        <li
          data-testid="Thursday"
          className={active === 'Thursday' ? 'active' : undefined}
        >
          <div
            data-testid="Thursday-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('Thursday');
              setSelectedProject('THU');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('Thursday');
                setSelectedProject('THU');
              }
            }}
          >
            <span><FaCar/>⠀#Thursday</span>
          </div>
        </li>
        <li
          data-testid="Friday"
          className={active === 'Friday' ? 'active' : undefined}
        >
          <div
            data-testid="Friday-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('Friday');
              setSelectedProject('FRI');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('Friday');
                setSelectedProject('FRI');
              }
            }}
          >
            <span><GiPartyPopper/>⠀#Friday</span>
          </div>
        </li>
        <li
          data-testid="Saturday"
          className={active === 'Saturday' ? 'active' : undefined}
        >
          <div
            data-testid="Saturday-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              setActive('Saturday');
              setSelectedProject('SAT');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setActive('Saturday');
                setSelectedProject('SAT');
              }
            }}
          >
            <span><FaUmbrellaBeach/>⠀#Saturday</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => setShowProjects(!showProjects)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setShowProjects(!showProjects);
        }}
        role="button"
        tabIndex={0}
      >
        
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  );
};
