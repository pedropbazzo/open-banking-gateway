package de.adorsys.opba.protocol.bpmnshared.dto.messages;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NonNull;

import java.net.URI;

/**
 * Generic response that represents we need to redirect user somewhere.
 */
@Getter
@EqualsAndHashCode(callSuper = true)
public class Redirect extends InternalProcessResult {

    @NonNull
    private URI redirectUri;

    private boolean doNotRemoveKey;

    @Builder
    public Redirect(String processId, String executionId, Object result, URI redirectUri, boolean doNotRemoveKey) {
        super(processId, executionId, result);
        this.redirectUri = redirectUri;
        this.doNotRemoveKey = doNotRemoveKey;
    }
}
