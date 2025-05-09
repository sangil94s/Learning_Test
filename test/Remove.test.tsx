import { expect, describe, it,vi } from "vitest";
import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import DeletePostComponent from "../components/Remove";
import axios from "axios";
import userEvent from "@testing-library/user-event";

vi.mock('axios')

describe('<DeletePostComponent />', () => {
	it('DeletePostComponent 컴포넌트 버튼이 삭제하기인지 확인합니다.', () => {
		render(<DeletePostComponent />);
		expect(screen.getByRole("button",{name: "삭제하기"})).toBeInTheDocument();
	})
	it('DeletePostComponent 컴포넌트에서 삭제 요청이 성공할 경우 alert에 삭제 성공이 등장합니다', async () => {
	    (axios.delete as any).mockResolvedValue({ status: 200 });
    	const alerts = vi.spyOn(window, 'alert').mockImplementation(() => {});

		const user = userEvent.setup();
		render(<DeletePostComponent />);

		await user.click(screen.getByRole("button", { name: "삭제하기" }));
	    expect(alerts).toHaveBeenCalledWith("삭제 성공");
	})
})
