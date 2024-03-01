import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children?: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      {/* <Card.Description>{children}</Card.Description> */}
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro, 32GB RAM (2021)"></Tool>
          <Tool title="Benq 23.8” 2480T MOnitor"></Tool>
          <Tool title="Keychron K2 Wireless Mechanical Keyboard (Blue Switch)"></Tool>
          <Tool title="Gaming Chair that is not internationally recognized"></Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code / Neovim"></Tool>
          <Tool title="Warp"></Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma"></Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Raycast"></Tool>
          <Tool title="Reflect"></Tool>
          <Tool title="Google Meet / Zoom"></Tool>
          <Tool title="Focus"></Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
