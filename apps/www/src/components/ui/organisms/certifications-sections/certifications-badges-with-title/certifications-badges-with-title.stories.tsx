import {imageFactory} from '@/tests/factories/image.factory'
import CertificationsBadgesWithTitle, {CertificationsBadgesWithTitleProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/CertificationsSections/CertificationsBadgesWithTitle',
  component: CertificationsBadgesWithTitle,
  tags: ['autodocs'],
  args: {
    title: 'Certifications',
    horizontalBadgesImage: imageFactory(),
    verticalBadgesImage: imageFactory()
  }
} satisfies Meta<typeof CertificationsBadgesWithTitle>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CertificationsBadgesWithTitleProps) => <CertificationsBadgesWithTitle {...args} />
}
