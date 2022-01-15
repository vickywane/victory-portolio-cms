import * as React from 'react'
import { Menu } from '@contember/admin'

export const SideMenu = () => {
	return (
		<Menu>
			<Menu.Item>
				<Menu.Item title="Dashboard" to="dashboard" />
				<br />

				<hr />
				<Menu.Item title="Articles" to="articles" />
				<Menu.Item title="Create Article" to="article-new" />
				<hr />
				<br />
				<Menu.Item title="Experiences" to="experiences" />
				<Menu.Item title="Create Experiences" to="experience-new" />
				<hr />

				<br />
				<Menu.Item title="Talks" to="talks" />
				<Menu.Item title="Create Talk" to="talk-new" />
				<hr />

				<br />
				<Menu.Item title="Certification" to="certifications" />
				<Menu.Item title="Create Certification" to="certification-new" />
				<hr />
			</Menu.Item>


		</Menu>
	)
}
