/*
 * Copyright (c) 2018, EPAM SYSTEMS INC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.epam.dlab.automation.test.libs.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.MoreObjects;

import java.util.List;


public class LibInstallRequest {
	@JsonProperty
	private List<Lib> libs;
	@JsonProperty("exploratory_name")
	private String notebookName;

	public LibInstallRequest(List<Lib> libs, String notebookName) {
		this.libs = libs;
		this.notebookName = notebookName;
	}

	public List<Lib> getLibs() {
		return libs;
	}

	public String getNotebookName() {
		return notebookName;
	}

	@Override
	public String toString() {
		return MoreObjects.toStringHelper(this)
				.add("libs", libs)
				.add("notebookName", notebookName)
				.toString();
	}
}
