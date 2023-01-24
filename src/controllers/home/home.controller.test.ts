import { home } from './home.controller';

describe('home controller', () => {
	it('responds with HTTP 200', async () => {
		const req = jest.fn() as any;
		const res = {} as any;

		res.status = jest.fn().mockReturnValue(res);
		res.send = jest.fn();

		await home(req, res);

		expect(res.status).toBeCalledWith(200);
		expect(res.send).toBeCalledWith('Hello World');
	});
});
