<template>
	<section id="age-control" class="check-age">
		<div class="check-age-background"></div>
		<header>
				<div class="container-fluid">
						<div class="d-flex justify-content-end">
							<div class="language-whyNot">
							<span>RUS</span>/<span>ENG</span>
							</div>
						</div>
					</div>
		</header>
		<div class="d-flex flex-column justify-content-center align-items-center check-age-main">
			<h2>BADBOAT</h2>
			<div class="d-flex flex-column align-items-center">
				<h3>ПОДТВЕРДИ, ЧТО ТЕБЕ УЖЕ ИСПОЛНИЛОСЬ 18 ЛЕТ</h3>
				<div class="row">
					<ul name="date" id="list">
					<li class="list-item" id="list-date">
						1
						<ul id="sub-list">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>6</li>
							<li>7</li>
							<li>8</li>
							<li>9</li>
							<li>10</li>
							<li>11</li>
							<li>12</li>
							<li>13</li>
							<li>14</li>
							<li>15</li>
							<li>16</li>
							<li>17</li>
							<li>18</li>
							<li>19</li>
							<li>20</li>
							<li>21</li>
							<li>22</li>
							<li>23</li>
							<li>24</li>
							<li>25</li>
							<li>26</li>
							<li>27</li>
							<li>28</li>
							<li>29</li>
							<li>30</li>
							<li>31</li>
						</ul>
					</li>
					</ul>
					<select name="month" id="list-months">
						<option value="1">Январь</option>
						<option value="2">Февраль</option>
						<option value="3">Март</option>
						<option value="4">Апрель</option>
						<option value="5">Май</option>
						<option value="6">Июнь</option>
						<option value="7">Июль</option>
						<option value="8">Август</option>
						<option value="9">Сентябрь</option>
						<option value="10">Октябрь</option>
						<option value="11">Ноябрь</option>
					<option value="12">Декабрь</option>
					</select>
					<ul name="date" id="list-year">
						<li class="list-item-year" id="list-year-insert">
							2018
							<ul id="sub-list-year">
							</ul>
						</li>
						</ul>
				</div>
				<button id="check-age-button" class="button-whyNot">ВОЙТИ</button>
			</div>
		</div>
	</section>
</template>
<style lang="sass">
.check-age
	display: none
	&-background
		position: absolute
		background-color: $red-whyNot
		opacity: 0.8
		height: 100vh
		width: 100vw
	header
		z-index: 3
		position: absolute
		width: 100%
	&-main
		z-index: 3
		position: absolute
		width: 100%
		height: 100vh 
		select
			color: $blue-whyNot
			margin: 0.5em 0.5em 1em 0.5em
			overflow: scroll
		#list
			position: absolute
			left: 41%
			//top: 50.5%
			background-color: $white
			color: $blue-whyNot
			list-style: none
			padding-inline-start: 20px
			padding-inline-end: 20px
			cursor: pointer
			&:before
				content: ''
				position: absolute
				z-index: 3
				right: 0
				top: 15px
				width: 0
				height: 0
				border-left: 3px solid transparent
				border-right: 3px solid transparent
				border-top: 6px solid $blue-whyNot
			.list-item
				position: absolute
				background-color: white
				left: 0
				padding: 0em 31px 0em 0.6em
				top: 7px
			ul 
				position: absolute
				display: none
				left: 0
				background-color: white
				padding-inline-start: 1px
				height: 307px
				overflow: overlay
				padding-right: 1.2em
				border: 7px solid $white
				li
					list-style: none
		#list-year
			position: absolute
			right: 40%
			background-color: $white
			color: $blue-whyNot
			list-style: none
			padding-inline-start: 20px
			padding-inline-end: 20px
			cursor: pointer
			&:before
				content: ''
				position: absolute
				z-index: 3
				right: -40%
				top: 15px
				width: 0
				height: 0
				border-left: 3px solid transparent
				border-right: 3px solid transparent
				border-top: 6px solid $blue-whyNot
			.list-item-year
				position: absolute
				background-color: white
				left: 0
				padding: 0em 24px 0em 0.6em
				top: 7px
			ul 
				position: absolute
				display: none
				left: 0
				background-color: white
				padding-inline-start: 1px
				height: 307px
				overflow: overlay
				padding-right: 1.2em
				border: 7px solid $white
				li
					list-style: none
		.row
			font-size: 14px
			margin-left: 2em
</style>
