package com.gepardec.mega.rest;

import com.gepardec.mega.rest.model.EnterpriseEntryDto;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/enterprise")
public interface EnterpriseResourceAPI {
    @GET
    @Path("/entriesformonthyear/{year}/{month}")
    @Produces(MediaType.APPLICATION_JSON)
    EnterpriseEntryDto getEnterpriseEntryForMonthYear(@PathParam("year") Integer year, @PathParam("month") Integer month);

    @PUT
    @Path("/entry/{year}/{month}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    boolean updateEnterpriseEntry(@PathParam("year") Integer year, @PathParam("month") Integer month, @RequestBody EnterpriseEntryDto entryDto);
}
