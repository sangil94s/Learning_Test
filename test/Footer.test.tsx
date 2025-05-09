import Footer from "../components/Footer";
import { expect, describe, it } from "vitest";
import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";

describe('<Footer />', () => {
	it('Footer 컴포넌트 테스트 목적 입니다, h1의 Footer를 잘 받는지 확인합니다', () => {
		render(<Footer />);
		expect(screen.getByText("Footer")).toBeInTheDocument();
	})

})

