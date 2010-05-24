
<%@ include file="/common/taglibs.jsp"%>

<head>

	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>fill the arguments</title>
		<script type="text/javascript" src="/scripts/add.js"></script>
 <meta name="heading" content="<fmt:message key='task.executable.plain'/>"/>
</head>
<body>
	<form:form>
		<form:errors path="*" cssStyle="color:OrangeRed" class="error"/>
		<fieldset id="pt1">
			<label>${executable.type} File:</label>
			<c:out value="${executable.fileName}" />
		</fieldset>

		<!-- start of common area -->
		<fieldset id="pt1">
			<label>Environment Variables:</label>
			<input type="button" value="+" onclick="add($('envMain'),$('envParam1'),2)" />
			<br />
			<div id='envMain'>
				<c:forEach items="${plainTemplate.environmentMap}" var="item">
					<div id='envParam0'>
						<input name="variable" type="text" value="${item.key}" />
						=
						<input name="value" type="text" value="${item.value}" />
						<input type="button" value="-" onclick="removeNode(this,'envParam1')" />
					</div>
				</c:forEach>
				<div id='envParam1'>
					<input name="variable" type="text" />
					=
					<input name="value" type="text" />
					<input type="button" value="-" onclick="removeNode(this,'envParam1')" />
				</div>
			</div>

		</fieldset>

		<fieldset id="pt1">
			<label>Input Files:</label>
			<input type="button" value="+" onclick="addSelect($('inputMain'),$('inputParam1'))" />
			<br />
			<div id='inputMain'>
				<c:forEach items="${niceParams.inputs}" var="item">
					<div id='inputParam0'>
						<select name="input">
							<option value="">Select</option>
							<c:forEach items="${supportedFiles}" var="file">
								<option value="${file.value}"	
									<c:if test="${item==file.value}"> selected="selected" 	</c:if>
									>
									${file.name}
								</option>
							</c:forEach>
						</select>
						<input type="button" value="-" onclick="removeNode(this,'inputParam1')" />
					</div>
				</c:forEach>
				<div id='inputParam1'>
					<select name="input">
						<option value="">Select</option>
						<c:forEach items="${supportedFiles}" var="file">
							<option value="${file.value}">${file.name}</option>
						</c:forEach>
					</select>
					<input type="button" value="-" onclick="removeNode(this,'inputParam1')" />
				</div>
			</div>
		</fieldset>
		<fieldset id="pt1">
			<label>Output Files:</label>
			<input type="button" value="+" onclick="addSelect($('outputMain'),$('outputParam1'))" />
			<br />
			<div id='outputMain'>
				<c:forEach items="${niceParams.outputs}" var="item">
					<div id='outputParam0'>
						<select name="output">
							<option value="">Select</option>
							<c:forEach items="${supportedFiles}" var="file">
								<option value="${file.value}"	
									<c:if test="${item==file.value}"> selected="selected" 	</c:if>
									>
									${file.name}
								</option>
							</c:forEach>
						</select>
						<input type="button" value="-" onclick="removeNode(this,'outputParam1')" />
					</div>
				</c:forEach>
				<div id='outputParam1'>
					<select name="output">
						<option value="">Select</option>
						<c:forEach items="${supportedFiles}" var="file">
							<option value="${file.value}">${file.name}</option>
						</c:forEach>
					</select>
					<input type="button" value="-" onclick="removeNode(this,'outputParam1')" />
				</div>
			</div>
		</fieldset>
		<fieldset id="pt1">
			<label>Other Argument Flags:</label>
			<input type="button" value="+" onclick="add($('otherMain'),$('otherParam1'),1)" />
			<br />
			<div id='otherMain'>
				<c:forEach items="${niceParams.others}" var="item">
					<div id='otherParam0'>
						<input name="other" type="text" value="${item}" />
						<input type="button" value="-" onclick="removeNode(this,'otherParam1')" />
					</div>
				</c:forEach>
				<div id='otherParam1'>
					<input name="other" type="text" />
					<input type="button" value="-" onclick="removeNode(this,'otherParam1')" />
				</div>
			</div>
		</fieldset>

		<!-- End of common area -->



		<fieldset id="button">
			<input type="submit" name="_eventId_review" value="Review" />
			<input type="submit" name="_eventId_back" value="Back" />
			<input type="submit" name="_eventId_cancel" value="Cancel" />
		</fieldset>
	</form:form>
</body>