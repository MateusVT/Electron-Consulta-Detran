type RequestOptions<E> = {
	body?: any
	url?: boolean
	onError?: (error: any) => void
	onFinish?: () => void
	onSuccess?: (data: E) => void
}

class Http {
	static call<E>(method: string, options: RequestOptions<E>) {
		const callbacks = {
			onError: options.onError || console.error,
			onFinish: options.onFinish || (() => {}),
			onSuccess: options.onSuccess || (() => {})
		}

		let url = ""

		fetch(url, {
			body: options.body && JSON.stringify(options.body),
			headers: this.mountHeaders(),
			method: method
		})
			.then(response => {
				const status = response.status

				response
					.text()
					.then(text => {
						let json: any

						try {
							json = JSON.parse(text)
						} catch (error) {
							callbacks.onError(`${error} (body: ${text})`)

							return
						}

						if (status == 200) {
							callbacks.onSuccess(json as E)
						} else {
							callbacks.onError(json.message !== undefined ? json.message : json)
						}
					})
					.catch(reason => {
						callbacks.onError(reason)
					})
			})
			.catch(reason => {
				callbacks.onError(reason)
			})
			.finally(() => {
				callbacks.onFinish()
				console.debug(`${method} ${options} FINISHED`)
			})
	}

	static delete<E>(options: RequestOptions<E>) {
		return this.call("DELETE", options)
	}

	static get<E>(options: RequestOptions<E>) {
		return this.call("GET", options)
	}

	static post<E>(options: RequestOptions<E>) {
		return this.call("POST", options)
	}

	static put<E>(options: RequestOptions<E>) {
		return this.call("PUT", options)
	}

	private static mountHeaders(): Record<string, string> {
		const accessToken = Cookies.get("accessToken")

		if (accessToken != null) {
			return {
				Authorization: accessToken,
				"Content-Type": "application/json"
			}
		}

		return {
			"Content-Type": "application/json"
		}
	}
}

export default Http
