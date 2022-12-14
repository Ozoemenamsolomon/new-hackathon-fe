import Calendar from 'reactjs-availability-calendar';
import Head from 'next/head';
import styled from 'styled-components';

function MyCal({ bookings }) {
	return (
		<CalWrapper className="cal">
			<Calendar showNumberOfMonths={2} bookings={bookings} />
		</CalWrapper>
	);
}

export default MyCal;

const CalWrapper = styled.div`
	.calendar {
		margin: 0 auto 20px;
	}
	.calendar .wrap {
		padding: 0 10px;
	}
	.currentYear {
		font-size: 32px;
		line-height: 1;
		font-weight: 400;
		font-style: normal;
		text-transform: none;
		text-align: center;
		color: #000;
		padding: 0;
		margin: 0 auto 50px;
	}
	.controls {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		margin: 0 0 50px;
	}
	.controls .btn {
		font-size: 18px;
		line-height: 1;
		font-weight: 400;
		font-style: normal;
		text-transform: none;
		text-align: center;
		color: #fff;
		border: none;
		background-color: #000;
		padding: 13px 20px;
		margin: 0;
		cursor: pointer;
	}
	.year {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		margin: 0 -10px;
	}
	.month {
		width: 25%;
		padding: 0 10px;
		margin: 0 0 20px;
		box-sizing: border-box;
	}
	.singleCol .month {
		width: 100%;
	}
	.twoCol .month {
		width: 50%;
	}
	.monthName {
		font-size: 24px;
		line-height: 1;
		font-weight: 400;
		font-style: normal;
		text-transform: none;
		text-align: center;
		color: #000;
		padding: 0;
		margin: 0 auto 20px;
	}
	.month .content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2px;
	}
	.day {
		width: 13.166667%;
		text-align: center;
		padding: 3px;
		background: gainsboro;
		box-sizing: border-box;
		border-radius: 3px;
	}
	.dayOfTheWeek .day {
		font-weight: 800;
		color: ${(props) => props.theme.colors.secondary};
	}
	.content.dayOfTheWeek {
		margin-bottom: 8px;
	}
	.booked {
		background-color: ${(props) => props.theme.colors.secondary};
		color: #fff;
	}
	.isLateCheckout {
		position: relative;
		background-color: transparent;
		overflow: hidden;
		color: #fff;
	}
	.isLateCheckout > span {
		background: #fff;
		color: #000;
		padding: 0 3px;
	}
	.isLateCheckout > span::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(248, 80, 50, 1);
		background: linear-gradient(
			to bottom right,
			${(props) => props.theme.colors.secondary} 50%,
			transparent 50%
		);
		z-index: -1;
	}
	.key {
		display: flex;
		flex-direction: row;
		margin: 0 absolute;
	}
	.key .type {
		margin: 0 10px 0 0;
	}
	.key .type span {
		position: relative;
		display: flex;
		line-height: 30px;
	}
	.key .type span::before {
		content: '';
		display: block;
		width: 30px;
		height: 30px;
		margin: 0 10px 0 0;
	}
	.bookedType span::before {
		background: #000;
	}
	.lateCheckoutType span::before {
		background: rgba(248, 80, 50, 1);
		background: linear-gradient(to bottom right, #000 50%, transparent 50%);
	}
	@media (max-width: 980px) {
		.month {
			width: 50%;
		}
	}
	@media (max-width: 768px) {
		.month,
		.twoCol .month {
			width: 100%;
		}
	}
`;
