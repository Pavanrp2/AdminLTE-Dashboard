import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
}

interface menuSection {
  section?: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() collapsed: boolean = false;

  activeItem: { [label: string]: boolean } = {};

  menuSections: menuSection[] = [
    {
      items: [
        {
          label: 'Dashboard',
          icon: 'bi bi-speedometer2',
          children: [
            { label: 'Dashboard v1', icon: 'bi bi-circle', route: '/dashboard/dashboard-v1' },
            { label: 'Dashboard v2', icon: 'bi bi-circle', route: '/dashboard/dashboard-v2' },
            { label: 'Dashboard v3', icon: 'bi bi-circle', route: '/dashboard/dashboard-v3' }
          ]
        },
        {
          label: 'Services',
          icon: 'bi bi-gear-fill',
          children: [
            { label: 'PhotoGraphy', icon: 'bi bi-circle' },
            { label: 'Videography', icon: 'bi bi-circle' },
            { label: 'Editor', icon: 'bi bi-circle' },
            { label: 'Event Enhancement', icon: 'bi bi-circle' },
            { label: 'Rental', icon: 'bi bi-circle' }
          ]
        },
        {
          label: 'Charts',
          icon: 'bi bi-pie-chart-fill',
          route: '/charts',
          children: [
            { label: 'ChartJS', icon: 'bi bi-circle' },
            { label: 'Flot', icon: 'bi bi-circle' },
            { label: 'Inline', icon: 'bi bi-circle' },
            { label: 'upFlot', icon: 'bi bi-circle' }
          ]
        },
        {
          label: 'UI Elements',
          icon: 'bi bi-tree-fill',
          route: '/ui',
          children: [
            { label: 'General', icon: 'bi bi-circle' },
            { label: 'Icons', icon: 'bi bi-circle' },
            { label: 'Buttons', icon: 'bi bi-circle' },
            { label: 'Sliders', icon: 'bi bi-circle' },
            { label: 'Modals & alerts', icon: 'bi bi-circle' },
            { label: 'Navbar & Tabs', icon: 'bi bi-circle' },
            { label: 'Timeline', icon: 'bi bi-circle' },
            { label: 'Ribbons', icon: 'bi bi-circle' }
          ]
        },
        {
          label: 'Forms',
          icon: 'bi bi-pencil-square',
          route: '/forms',
          children: [
            { label: 'General Elements', icon: 'bi bi-circle' },
            { label: 'Advanced Elements', icon: 'bi bi-circle' },
            { label: 'Editors', icon: 'bi bi-circle' },
            { label: 'Validation', icon: 'bi bi-circle' }
          ]
        },
        {
          label: 'Tables',
          icon: 'bi bi-pencil-square',
          route: '/tables',
          children: [
            { label: 'Simple Tables', icon: 'bi bi-circle' },
            { label: 'DataTables', icon: 'bi bi-circle' },
            { label: 'jsGrid', icon: 'bi bi-circle' }
          ]
        }
      ]
    },
    {
      section: 'EXAMPLES',
      items: [
        {
          label: 'Calendar',
          icon: 'bi bi-calendar3'
        },
        {
          label: 'Gallery',
          icon: 'bi bi-image'
        },
        {
          label: 'Kanban Board',
          icon: 'bi bi-trello'
        },
        {
          label: 'Mailbox',
          icon: 'bi bi-envelope',
          children: [
            { label: 'inbox', icon: 'bi bi-circle' },
            { label: 'Compose', icon: 'bi bi-circle' },
            { label: 'Read', icon: 'bi bi-circle' }
          ]
        },
        {
          label: 'Pages',
          icon: 'bi bi-journals',
          children: [
            { label: 'Invoice', icon: 'bi bi-circle' },
            { label: 'Profile', icon: 'bi bi-circle' },
            { label: 'E-commerce', icon: 'bi bi-circle' },
            { label: 'Projects', icon: 'bi bi-circle' },
            { label: 'Project Add', icon: 'bi bi-circle' },
            { label: 'Project Edit', icon: 'bi bi-circle' },
            { label: 'Project Detail', icon: 'bi bi-circle' },
            { label: 'Contacts', icon: 'bi bi-circle' },
            { label: 'FAQ', icon: 'bi bi-circle' },
            { label: 'Contact Us', icon: 'bi bi-circle' }
          ]
        },
        {
          label: 'Extras',
          icon: 'bi bi-journals',
          children: [
            {
              label: 'Login & Register v1',
              icon: 'bi bi-circle',
              children: [
                { label: 'Error 500', icon: 'bi bi-circle' },
                { label: 'Pace', icon: 'bi bi-circle' },
                { label: 'blank Page', icon: 'bi bi-circle' },
                { label: 'Starter Page', icon: 'bi bi-circle' }
              ]
            },
            {
              label: 'Login & Register v2',
              icon: 'bi bi-circle',
              children: [
                { label: 'Error 500', icon: 'bi bi-circle' },
                { label: 'Pace', icon: 'bi bi-circle' },
                { label: 'blank Page', icon: 'bi bi-circle' },
                { label: 'Starter Page', icon: 'bi bi-circle' }
              ]
            },
            { label: 'Lockscreen', icon: 'bi bi-circle' },
            { label: 'Legacy User Menu', icon: 'bi bi-circle' },
            { label: 'Language Menu', icon: 'bi bi-circle' },
            { label: 'Error 404', icon: 'bi bi-circle' },
            { label: 'Error 500', icon: 'bi bi-circle' },
            { label: 'Pace', icon: 'bi bi-circle' },
            { label: 'blank Page', icon: 'bi bi-circle' },
            { label: 'Starter Page', icon: 'bi bi-circle' }
          ]
        },
        {
          label: 'Search',
          icon: 'bi bi-search',
          children: [
            { label: 'Simple Search', icon: 'bi bi-circle' },
            { label: 'Enhanced', icon: 'bi bi-circle' }
          ]
        }
      ]
    },

    {
      section: 'Miscellaneous',
      items: [
        {
          label: 'Tabbed IFrame Plugin',
          icon: 'bi bi-three-dots'
        },
        {
          label: 'Documentation',
          icon: 'bi bi-file-earmark'
        }
      ]
    },

    {
      section: 'Multilevel Example',
      items: [
        {
          label: 'Level 1',
          icon: 'bi bi-circle-fill'
        },
        {
          label: 'Level 1',
          icon: 'bi bi-circle-fill',
          children: [
            {label: 'Level 2', icon: 'bi bi-circle'},
            {label: 'Level 2', icon: 'bi bi-circle'}
          ]
        },
        {
          label: 'Level 1',
          icon: 'bi bi-circle-fill'
        }
      ]
    },

    {
      section: 'Labels',
      items: [
        {
          label: 'Important',
          icon: 'bi bi-circle'
        },
        {
          label: 'Warning',
          icon: 'bi bi-circle'
        },
        {
          label: 'Information',
          icon: 'bi bi-circle'
        }
      ]
    },
  ];

  toggleItem(id: string) {
    this.activeItem[id] = !this.activeItem[id];
  }

  isActive(id: string): boolean {
    return this.activeItem[id];
  }

  getId(label: string): string {
    return label.replace(/\s+/g, '').toLowerCase();
  }
}

